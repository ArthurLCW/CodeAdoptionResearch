const fs = require("fs");
const { parse } = require("csv-parse/sync");
const { stringify } = require("csv-stringify/sync");

const inputFile = "./demographicsCombined.csv"; // Path to the input CSV file
const outputFile = "./filteredDemographics.csv"; // Path for the output CSV file

// This function reads a CSV file and filters rows
function filterCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
  });

  // Filter records where Status is either 'APPROVED' or 'REJECTED'
  const filteredRecords = records.filter(
    (row) => row.Status === "APPROVED" || row.Status === "REJECTED"
  );

  return filteredRecords;
}

// Process the file
const filteredData = filterCSV(inputFile);

// Convert the filtered data back into CSV
const csvOutput = stringify(filteredData, {
  header: true,
});

// Write the filtered CSV to a file
fs.writeFileSync(outputFile, csvOutput);

console.log("CSV file has been filtered and saved successfully.");
