import React, { useContext } from "react";
import AppContext from "../state/appContext";

const Games = () => {
  const state = useContext(AppContext);
  const { apiData, filteredList } = state;

  if (apiData && !filteredList) {
    return (
      apiData &&
      apiData.map((i, k) => (
        <div key={k} className="GameItem">
          <h5>{i.title}</h5>
          <p>Genre: {i.genre}</p>
          <p>Platform: {i.platform}</p>
          <p>Score: {i.score}</p>
        </div>
      ))
    );
  } else if (filteredList) {
    return filteredList.map((i, k) => (
      <div key={k} className="GameItem">
        <h5>{i.title}</h5>
        <p>Genre: {i.genre}</p>
        <p>Platform: {i.platform}</p>
        <p>Score: {i.score}</p>
      </div>
    ));
  } else {
    return null;
  }
};

export default Games;
