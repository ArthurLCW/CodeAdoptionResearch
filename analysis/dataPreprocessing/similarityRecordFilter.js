// // This file filters the similarity record files with "ai"

// const fs = require("fs");
// const path = require("path");

// // Directory containing the JSON files
// const directoryPath = path.join(__dirname, "jplag/results");

// // Array to store file names containing 'ai'
// const aiFiles = [];

// // Read directory for JSON files
// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     return console.log("Unable to scan directory: " + err);
//   }

//   // Iterate over all files in the directory
//   files.forEach((file) => {
//     // Check if the file is a JSON file and contains 'ai' in the name
//     if (file.endsWith(".json") && file.includes("ai")) {
//       aiFiles.push(file);
//     } else {
//       // Delete the file
//       const filePath = path.join(directoryPath, file);
//       fs.unlink(filePath, (err) => {
//         if (err) {
//           console.error("Error deleting file:", filePath, err);
//         } else {
//           console.log("Deleted file:", filePath);
//         }
//       });
//     }
//   });

//   // Log or process the array of filenames
//   console.log("aiFiles:", aiFiles);
// });

const fs = require("fs");
const path = require("path");

// Get directory from command line arguments
const directoryPath = process.argv[2]
  ? path.join(process.argv[2])
  : path.join(__dirname, "jplag/results");

// Array to store file names containing 'ai'
const aiFiles = [];

// Read directory for JSON files
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Iterate over all files in the directory
  files.forEach((file) => {
    // Check if the file is a JSON file and contains 'ai' in the name
    if (file.endsWith(".json") && file.includes("ai")) {
      aiFiles.push(file);
    } else {
      // Delete the file if it doesn't contain 'ai' and is a JSON file
      if (file.endsWith(".json")) {
        const filePath = path.join(directoryPath, file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", filePath, err);
          } else {
            // console.log("Deleted file:", filePath);/
          }
        });
      }
    }
  });

  // Log or process the array of filenames
  // console.log("aiFiles:", aiFiles);
});
