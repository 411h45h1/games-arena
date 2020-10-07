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
    fetch(`http://starlord.hackerearth.com/gamesarena`)
      .then(async (response) => {
        let res = await response.json();
        res.shift();
        dispatch({ type: "LOAD_API_DATA", payload: res });
      })
      .catch((error) => console.log("Fetch Error:", error));
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
