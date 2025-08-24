const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");

const demographicsFile = "./filteredDemographics.csv"; // Path to the demographics CSV file
const dataFile = "./data-filtered.csv"; // Path to the data CSV file
const outputDemographicsFile = "./validDemographics.csv"; // Path for the output demographics CSV file
const outputDataFile = "./data-demographics.csv"; // Path for the updated data CSV file

function readCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
  });
}

// Read both CSV files
const demographicsData = readCSV(demographicsFile);
const dataDeletedData = readCSV(dataFile);

// Create a set of valid prolificIds from the data-deleted.csv for checking existence
const validProlificIds = new Set(dataDeletedData.map((row) => row.prolificId));

// Filter demographics data
const filteredDemographicsData = demographicsData.filter((row) =>
  validProlificIds.has(row["Participant id"])
);

// Map for quick lookup of Sex by Participant id from demographics data
const participantSexMap = {};
filteredDemographicsData.forEach((row) => {
  participantSexMap[row["Participant id"]] = { Sex: row.Sex, Age: row.Age };
});

// Add 'Sex' column to data-deleted data
const updatedDataDeletedData = dataDeletedData.map((row) => ({
  ...row,
  Sex: participantSexMap[row.prolificId].Sex || "", // Fallback to empty string if no match found
  Age: participantSexMap[row.prolificId].Age || "", // Fallback to empty string if no match found
}));

// Convert the filtered demographics data back into CSV
const updatedDemographicsCSV = stringify(filteredDemographicsData, {
  header: true,
});
const updatedDataDeletedCSV = stringify(updatedDataDeletedData, {
  header: true,
});

// Write the filtered CSV to files
fs.writeFileSync(outputDemographicsFile, updatedDemographicsCSV);
fs.writeFileSync(outputDataFile, updatedDataDeletedCSV);

console.log("CSV files have been processed and updated successfully.");
