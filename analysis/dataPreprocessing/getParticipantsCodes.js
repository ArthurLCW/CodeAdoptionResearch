// This file read the codes written by the participants, put their codes into a single file for Jplag processing
// hyper-parameters
const jsonFileName = "rawData.json";
const investigatedProject = undefined;
const investigatedBatch = undefined;
const investigatedParticipant = undefined;

const fs = require("fs");
const path = require("path");

function writeToFile(filePath, content) {
  try {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content);
    // console.log("File written successfully: ", filePath);
  } catch (error) {
    console.error("Failed to write file:", error);
  }
}

// Load the JSON data from the file
fs.readFile(jsonFileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);
  // let combinedCode = "";

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
        if (
          participant["lcwSurvey-1-0: consent"] ===
          "No, I decline to participate in this study."
        ) {
          console.log(
            "consent deny: ",
            participant["prolificId"],
            participant["batch"],
            participant["project"]
          );
          continue;
        }
        let code1Key = "lcwSurvey-3-0: " + participant["taskFile"].slice(0, -3); // remove ".md"
        let code2Key =
          "lcwSurvey-4-0: " + participant["lcwSurveyRandomMd"].slice(0, -3);
        let code1 = participant[code1Key].replace(/\\n/g, "\n");
        let code2 = participant[code2Key].replace(/\\n/g, "\n");
        writeToFile(
          "codingTask1/" +
            participant["taskFile"] +
            "/" +
            participantKey +
            "/code.js",
          code1
        );
        writeToFile(
          "codingTask2/" +
            participant["taskFile"] +
            "/" +
            participantKey +
            "/code.js",
          code2
        );
      }
    }
  }
});
