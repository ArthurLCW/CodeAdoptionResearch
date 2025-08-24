const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");

const inputFolder = "./demographics"; // Directory where your CSV files are stored
const outputFile = "./demographicsCombined.csv"; // Path for the output CSV file

// This function reads a CSV file and adds a 'projectName' column
function processCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
  });

  const projectName = path.basename(filePath, ".csv");

  // Add the projectName to each row
  records.forEach((row) => {
    row.projectName = projectName;
  });

  return records;
}

// Get all CSV files in the directory
const files = fs
  .readdirSync(inputFolder)
  .filter((file) => file.endsWith(".csv"));
let combinedData = [];

// Process each file
files.forEach((file) => {
  const filePath = path.join(inputFolder, file);
  const data = processCSV(filePath);
  combinedData = combinedData.concat(data);
});

// Convert the combined data back into CSV
const csvOutput = stringify(combinedData, {
  header: true,
});

// Write the combined CSV to a file
fs.writeFileSync(outputFile, csvOutput);

console.log("CSV files have been combined successfully.");
