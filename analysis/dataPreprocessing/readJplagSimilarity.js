const fs = require("fs");
const path = require("path");

// Base directory containing the JSON files
const baseDirectoryPath = path.join(__dirname, "similarity_records");

/**
 * Searches JSON files in a specified subdirectory of 'similarity_records' that contain a given ID in their filenames.
 * Reads and returns the 'first_similarity' and 'second_similarity' values from the JSON content synchronously, adjusting based on which ID represents 'ai'.
 *
 * @param {string} id The ID to search for in the filenames.
 * @param {string} questionSet The subdirectory name under the main directory where files are located.
 * @returns {Object} An object containing similarity data.
 */
function readJplagSimilarity(id, questionSet) {
  // Construct the path to the specific questionSet directory
  const directoryPath = path.join(baseDirectoryPath, questionSet);

  // Read directory for JSON files synchronously
  const files = fs.readdirSync(directoryPath);

  // Filter files that contain the id in their filenames
  const filteredFiles = files.filter(
    (file) => file.includes(id) && file.endsWith(".json")
  );

  if (filteredFiles.length === 0) {
    return {};
  }

  // Process the first matching file
  const filePath = path.join(directoryPath, filteredFiles[0]);
  const data = fs.readFileSync(filePath, "utf8");
  try {
    const jsonData = JSON.parse(data);
    return {
      JPlag_P_Sim:
        jsonData.id1 !== "ai"
          ? jsonData.first_similarity
          : jsonData.second_similarity,
      JPlag_AI_Sim:
        jsonData.id1 !== "ai"
          ? jsonData.second_similarity
          : jsonData.first_similarity,
    };
  } catch (parseErr) {
    console.error("Error parsing JSON from file: " + filePath, parseErr);
    return {};
  }
}
console.log(
  readJplagSimilarity("5c093a3f600aff0001d7002c", "easy_ransom_notes")
);
module.exports = readJplagSimilarity;
