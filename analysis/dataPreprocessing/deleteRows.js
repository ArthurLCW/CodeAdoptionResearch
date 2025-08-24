const fs = require("fs");
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");

// Function to read and filter CSV data, then modify specific aspects
function filterCSV(inputFilePath, outputFilePath) {
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  // Configure the parser with a custom function for handling column names
  const parser = input.pipe(
    parse({
      columns: (header) => header.map((column) => column.replace(/-/g, "_")),
      skip_empty_lines: true,
    })
  );

  // Array to hold rows after filtering
  let filteredData = [];

  parser.on("data", (row) => {
    if (row.invalid !== "YES" && row.cheat !== "YES") {
      // Append the row to filteredData
      filteredData.push(row);
    }
  });

  parser.on("end", () => {
    // Remove unwanted columns from each row in filteredData
    filteredData = filteredData.map((row) => {
      delete row.invalid;
      delete row.cheat;
      delete row.leaveFullScreenTimes;
      return row;
    });

    // Configure the stringifier to output without the removed columns
    const stringifier = stringify({ header: true });
    stringifier.on("error", (error) => {
      console.error("Error during CSV stringifying:", error);
    });

    // Write the processed data to the output file
    stringifier.pipe(output);

    // Write each filtered and modified row to the stringifier
    filteredData.forEach((row) => {
      stringifier.write(row);
    });

    // Close the writable stream after all data has been written
    stringifier.end();
    console.log(
      "CSV file has been processed, filtered, columns removed, and column names modified."
    );
  });

  parser.on("error", (error) => {
    console.error("Error during CSV parsing:", error);
  });
}

// Example usage
const inputFilePath = "data.csv"; // Ensure the path is correct and file exists
const outputFilePath = "data-filtered.csv";
filterCSV(inputFilePath, outputFilePath);
