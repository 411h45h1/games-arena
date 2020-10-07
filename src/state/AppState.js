import React, { useReducer, useEffect } from "react";
//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {
    apiData: null,
    filteredList: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { apiData, filteredList } = state;

  useEffect(() => {
    if (!apiData) {
      onApi();
    }
    apiData && console.log(apiData);
  }, [apiData, filteredList]);

  const onApi = () => {
    fetch(`http://starlord.hackerearth.com/gamesarena`)
      .then(async (response) => {
        let res = await response.json();
        res.shift();
        dispatch({ type: "LOAD_API_DATA", payload: res });
      })
      .catch((error) => console.log("Fetch Error:", error));
  };

  const onFilter = (filterTerm) => {
    if (filterTerm === "All") {
      dispatch({
        type: "FILTERED_LIST",
        payload: apiData,
      });
    } else {
      let resObj = apiData.filter((obj) => obj.platform === filterTerm);
      console.log("filterTerm", filterTerm);
      console.log("resObj", resObj);

      dispatch({
        type: "FILTERED_LIST",
        payload: resObj,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        apiData: state.apiData,
        filteredList: state.filteredList,
        onFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
