// import { readFile } from "fs";
import axios from "axios";

import { praanActions } from "./praan-slice";
// function uploadPraanData() {
//   function convertCsvToObject(filePath) {
//     return new Promise((resolve, reject) => {
//       readFile(filePath, "utf8", (err, csvText) => {
//         if (err) {
//           reject(new Error("Error reading the CSV file."));
//           return;
//         }

//         const lines = csvText.split("\n");
//         const headers = lines[0].split(",");
//         const jsonData = [];

//         for (let i = 1; i < lines.length; i++) {
//           const row = lines[i].split(",");
//           const rowData = {};

//           for (let j = 0; j < headers.length; j++) {
//             rowData[headers[j]] = row[j];
//           }

//           jsonData.push(rowData);
//         }

//         resolve(jsonData);
//       });
//     });
//   }

//   const csvFilePath =
//     "/Users/ananthan2k/Gitrepos/aq-monitor/Dataset/mock_dataset_2.csv"; // Replace with the actual path to your CSV file
//   convertCsvToObject(csvFilePath)
//     .then((jsonData) => {
//       console.log("CSV to Object:", jsonData);
//       fetch(
//         process.env.REACT_APP_DATASET1_URL + dataset + ".json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(jsonData),
//         }
//       );
//     })
//     .catch((error) => {
//       console.error("Error:", error.message);
//     });
// }

// praan action creator
export function getPraanData(dataset) {
  return async (dispatch) => {
    let Res;
    try {
      Res = await axios.get(
        process.env.REACT_APP_DATASET1_URL + dataset + ".json"
      );

      dispatch(praanActions.fetchPraanData(Res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
