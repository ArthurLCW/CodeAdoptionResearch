## Introduction

This project preprocesses and analyzes the data used in the research 'Do Comments and Expertise Still Matter? A Controlled Experiment on Programmers’ Adoption of AI-Generated Code'. It consists of two parts:

1. Data Preprocessing: Preprocess the raw data obtained from the Firebase Realtime Database. The scripts and raw data are presented in folder `\dataPreprocessing`. The scripts in the folder extract code written by participants, calculate the four types of code similarity metrics and trim the raw data from a JSON to a CSV file.
2. Data Analysis: Analyze the trimmed data after data preprocessing. Data analysis is conducted via SPSS. You may see the results in folder `\dataAnalysis`

## Data Preprocessing Setup

1. Run `cd .\dataPreprocessing` to ensure you are under the folder `dataPreprocessing`
2. Run `npm install` to install dependencies.
3. Download raw data from Firebase, and change the name to "rawdata.json".
4. To get codes written by participants, run `node getParticipantsCodes.js`, and get the participants' submitted codes. Participants' submitted codes on page three will be placed in folder `\codingTask1` , while participants' submitted codes on page four will be placed in `\codingTask2`.
5. You can review participants' submitted code and list the invalid responses in `invalidResponse.json`
6. Run `.\codesProcess.bat` to calculate code similarity.
7. Run `.\tableGeneration.bat` to get the processed raw data. The file `data-filtered.csv` is the CSV file that could be used for further analysis.

## Data Analysis

The file `rawData.sav` stores the data used in SPSS analysis. The file `Analysis.spv` stores the analysis results, including results of PCA analysis, Cronbach's alpha, and linear regression.
