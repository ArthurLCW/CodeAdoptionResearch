// this file generates the table from json data
// do not erase existing data, directly add data after the existing data

// hyper-parameters
const jsonFileName = "rawdata.json";
const csvFileName = "data.csv";
const investigatedProject = undefined;
const investigatedBatch = undefined;
const investigatedParticipant = undefined;
const domain_knowledge_obj = [
  "domain-knowledge-HashMap-obj",
  "domain-knowledge-LinkedList-obj",
  "domain-knowledge-queue-obj",
  "domain-knowledge-stack-obj",
  "domain-knowledge-tree-obj",
];
const domain_knowledge_sub = [
  "domain-knowledge-HashMap-sub",
  "domain-knowledge-LinkedList-sub",
  "domain-knowledge-queue-sub",
  "domain-knowledge-stack-sub",
  "domain-knowledge-tree-sub",
];
const removedKeys = [
  "currentPage",
  "initPageNum",
  "lcwRecordInfo",
  "sessionId",
  "studyId",
  "consent",
  "lcwSurvey-1-0: consent",
];
// const neededKeys = [];
const neededKeys = [
  "prolificId",
  "project",
  "batch",
  "questionSet",
  "leaveFullScreenTimes",
  "runRecords3",
  "runRecords4",
  "submitRecords3",
  "submitRecords4",
  "screener-current-job",
  "screener-programming-experience-obj",
  "screener-language-proficiency-obj",
  "screener-programming-experience-sub",
  "screener-language-proficiency-sub",
  "attitudes-general",
  "perceived-difficulty",
  "post-test-comment",
  ...domain_knowledge_sub,
  ...domain_knowledge_obj,
  "screener-current-job",
  "post-test-space-complexity",
  "post-test-time-complexity",
  "post-test-code-quality",
  "post-test-comprehend",
];
const coding1Num = "coding1";
const coding2Num = "coding2";

const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");
const bruteForceSimilarity = require("./bruteForceSimilarity");
const readJplagSimilarity = require("./readJplagSimilarity");

// check runRecord/submitRecord data, output 1 if pass, 0.1 if fail, 0 if do not exist
function checkRunRecord(records) {
  if (!records) return 0;
  const arrAll = JSON.parse(records);
  let isAllCorrect = false;
  for (let i = 0; i < arrAll.length; i++) {
    const arrBatch = arrAll[i];
    let isBatchCorrect = true;
    arrBatch.forEach((testcase) => {
      if (testcase.status.id !== 3) isBatchCorrect = false;
    });
    if (isBatchCorrect) {
      isAllCorrect = true;
      break;
    }
  }
  if (isAllCorrect) return 1;
  else return 0.1;
}

// concentration check
function checkLeaveFullScreen(leaves) {
  if (!leaves) return "";
  const obj = JSON.parse(leaves);
  let freq = 0;
  let duration = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && (key === "3" || key === "4")) {
      freq += obj[key][0];
      duration += obj[key][1];
    }
  }
  if (freq > 2 || duration > 2) {
    return "YES";
  } else return "";
}

// calculate attitudes
function fearAndAcceptance(obj) {
  let fear =
    (Number(obj["I fear AI code generation system"]) +
      Number(obj["AI will destroy humankind"]) +
      Number(obj["AI code generation system will cause many job losses"])) /
    3;
  let acceptance =
    (Number(obj["I trust AI code generation system"]) +
      Number(obj["AI code generation system will benefit programmers"])) /
    2;
  return { fear: fear, acceptance: acceptance };
}

// Function to read existing CSV data and convert it back to JSON
function readCSVtoJSON(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const csvContent = fs.readFileSync(filePath, "utf8");
  return parse(csvContent, { columns: true, skip_empty_lines: true });
}

function isInvalid(questionSet, id) {
  let filePath = "./invalidResponse.json";
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath, "utf8");
    // Parse the file data as JSON
    return !!JSON.parse(data)[questionSet].includes(id);
  } catch (err) {
    console.error("Error reading or parsing the JSON file:", err);
    throw err; // Re-throw the error for further handling if necessary
  }
}

function transferLikertResponse(response) {
  const map = {
    "Not experienced at all": 1,
    "Slightly experienced": 2,
    "Moderately experienced": 3,
    "Very experienced": 4,
    "Extremely experienced": 5,

    "Not familiar at all": 1,
    "Slightly familiar": 2,
    "Moderately familiar": 3,
    "Very familiar": 4,
    "Extremely familiar": 5,

    "Not proficient at all": 1,
    "Slightly proficient": 2,
    "Moderately proficient": 3,
    "Very proficient": 4,
    "Extremely proficient": 5,

    "Extremely easy": 1,
    "Somewhat Easy": 2,
    "Neither easy nor difficult": 3,
    "Somewhat difficult": 4,
    "Extremely difficult": 5,
  };
  if (typeof response === "string" && map[response]) {
    return map[response];
  } else {
    return response;
  }
}

function transferObjDomainKnowledgeFamiliarity(response) {
  if (response.includes("I have never heard of")) return 1;
  else if (response.includes("but I have never used them")) return 2;
  else if (response.includes("I have occasionally used")) return 3;
  else if (response.includes("I regularly use")) return 4;
  else return response;
}

// Function to update and write to the CSV
function updateCSV(filePath, newJsonData, removedKeys) {
  let existingRecords = readCSVtoJSON(filePath);

  // remove all 'lcwSurvey-x-y: ' in keys
  // remove the value of the two coding questions in the csv
  for (const key in newJsonData) {
    if (!newJsonData.hasOwnProperty(key)) continue;
    if (key.includes("lcwSurvey-")) {
      newJsonData[key.slice(15)] = transferLikertResponse(
        JSON.parse(JSON.stringify(newJsonData[key]))
      );
      delete newJsonData[key];
    }
    // add presence_of_comments
    if (key === "project") {
      newJsonData["presence_comments"] = newJsonData["project"]
        .split("_")
        .pop();
    }
  }

  // remove unnecessary keys
  removedKeys.forEach((key) => {
    delete newJsonData[key];
  });

  // keep needed keys, and rename
  let coding1KeyName = ""; // get coding key in advance
  let coding2KeyName = "";
  if (neededKeys.length > 0) {
    for (const key in newJsonData) {
      if (!newJsonData.hasOwnProperty(key)) continue;
      // get if this data is invalid
      if (isInvalid(newJsonData["questionSet"], newJsonData["prolificId"])) {
        newJsonData["invalid"] = "YES";
      }
      if (!neededKeys.includes(key)) {
        if (key.includes(coding1Num)) {
          coding1KeyName = key;
        } else if (key.includes(coding2Num)) {
          coding2KeyName = key;
        } else delete newJsonData[key];
      } else {
        if (key === "attitudes-general") {
          const attitudes = fearAndAcceptance(JSON.parse(newJsonData[key]));
          newJsonData["attitudes-fear"] = attitudes["fear"];
          newJsonData["attitudes-acceptance"] = attitudes["acceptance"];
          delete newJsonData[key];
        }
        if (domain_knowledge_sub.includes(key)) {
          newJsonData["domain_knowledge_sub"] = newJsonData[key];
          delete newJsonData[key];
        } else if (domain_knowledge_obj.includes(key)) {
          newJsonData["domain_knowledge_obj"] =
            transferObjDomainKnowledgeFamiliarity(newJsonData[key]);
          delete newJsonData[key];
        }
      }
    }
  }

  // deal with run and submit
  newJsonData["runRecords3"] = checkRunRecord(newJsonData["runRecords3"]);
  newJsonData["runRecords4"] = checkRunRecord(newJsonData["runRecords4"]);
  newJsonData["submitRecords3"] = checkRunRecord(newJsonData["submitRecords3"]);
  newJsonData["submitRecords4"] = checkRunRecord(newJsonData["submitRecords4"]);
  const codeExecutionSummary =
    newJsonData["runRecords3"] +
    newJsonData["runRecords4"] +
    newJsonData["submitRecords3"] +
    newJsonData["submitRecords4"];
  if (codeExecutionSummary >= 1) newJsonData["codeExecutionSummary"] = 1;
  else if (codeExecutionSummary > 0) newJsonData["codeExecutionSummary"] = 0;
  else if (codeExecutionSummary === 0) newJsonData["codeExecutionSummary"] = -1;

  // deal with leave full screen
  newJsonData["cheat"] = checkLeaveFullScreen(
    newJsonData["leaveFullScreenTimes"]
  );

  // calculate brute force similarity
  const bruteforceSimObj = bruteForceSimilarity(
    newJsonData[coding2KeyName],
    newJsonData["questionSet"]
  );
  newJsonData["BF_P_Sim"] = bruteforceSimObj["BF_P_Similarity"];
  newJsonData["BF_AI_Sim"] = bruteforceSimObj["BF_AI_Similarity"];
  delete newJsonData[coding1KeyName];
  delete newJsonData[coding2KeyName];
  console.log(coding1KeyName, coding2KeyName);

  // record JPlag
  const jplagSimObj = readJplagSimilarity(
    newJsonData["prolificId"],
    newJsonData["questionSet"]
  );
  newJsonData["JPlag_P_Sim"] = jplagSimObj["JPlag_P_Sim"];
  newJsonData["JPlag_AI_Sim"] = jplagSimObj["JPlag_AI_Sim"];

  // translate to csv logics...
  // Combine existing and new records to ensure all fields are captured
  const combinedData = existingRecords.concat(newJsonData);

  // Extract all unique keys (column headers) from all records
  const allKeys = new Set();
  combinedData.forEach((record) => {
    Object.keys(record).forEach((key) => allKeys.add(key));
  });

  // Prepare columns for stringifying using extracted keys
  const columns = Array.from(allKeys).map((header) => ({
    key: header,
    header,
  }));

  // Convert the combined JSON data to CSV with dynamic columns
  const csvString = stringify(combinedData, { header: true, columns });

  // Write the CSV file
  fs.writeFileSync(filePath, csvString);
  // console.log("CSV file has been updated with dynamic columns.");
}

// Load the JSON data from the file
fs.readFile(jsonFileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Empty the CSV file at the beginning
  fs.writeFileSync(csvFileName, "");

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  let combinedCode = "";

  // iterate projects
  for (const projectKey in jsonData) {
    if (!jsonData.hasOwnProperty(projectKey)) continue;
    if (investigatedProject && projectKey !== investigatedProject) continue;

    // iterate batch
    const project = jsonData[projectKey];
    for (const batchKey in project) {
      if (!project.hasOwnProperty(batchKey)) continue;
      if (investigatedBatch && batchKey !== investigatedBatch) continue;

      // iterate participant
      const batch = project[batchKey];
      for (const participantKey in batch) {
        if (!batch.hasOwnProperty(participantKey)) continue;
        if (
          investigatedParticipant &&
          participantKey !== investigatedParticipant
        )
          continue;

        // read participant's data
        const participant = batch[participantKey];
        updateCSV(csvFileName, participant, removedKeys);
      }
    }
  }
});
