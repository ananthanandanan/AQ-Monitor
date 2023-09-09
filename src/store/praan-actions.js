import axios from "axios";

import { praanActions } from "./praan-slice";

/**
 * getPraanData is a function that is used to fetch the data from the dataset.
 *
 * @param {string} dataset - The name of the dataset to fetch
 *
 * @returns {function} - returns the dispatch function to dispatch the action
 *
 */
export function getPraanData(dataset) {
  return async (dispatch) => {
    let Res;
    try {
      Res = await axios.get(
        process.env.REACT_APP_DATASET1_URL + "/" + dataset + ".json"
      );

      dispatch(praanActions.fetchPraanData(Res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
