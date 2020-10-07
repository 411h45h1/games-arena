import React, { useReducer, useEffect } from "react";
//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {
    apiData: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { apiData } = state;

  useEffect(() => {
    if (!apiData) {
      callApi();
    }
  }, [apiData]);

  const callApi = () => {
    fetch(
      "http://starlord.hackerearth.com/gamesarena",
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then(async (response) => {
        let res = await response.json();
        dispatch({ type: "LOAD_API_DATA", payload: res.results });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <AppContext.Provider
      value={{
        apiData: state.apiData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
