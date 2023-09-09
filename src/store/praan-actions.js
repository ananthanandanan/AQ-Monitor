import axios from "axios";

import { praanActions } from "./praan-slice";
// praan action creator
export function getPraanData(dataset) {
  return async (dispatch) => {
    let Res;
    try {
      Res = await axios.get(
        "https://aq-monitor-d3dc2-default-rtdb.asia-southeast1.firebasedatabase.app" +
          "/" +
          dataset +
          ".json"
      );

      dispatch(praanActions.fetchPraanData(Res.data));
    } catch (error) {
      console.log(error);
    }
  };
}
