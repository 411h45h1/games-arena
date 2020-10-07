import React, { useContext } from "react";
import AppContext from "../state/appContext";

const Games = () => {
  const state = useContext(AppContext);
  const { apiData } = state;
  console.log(apiData);
  return (
    apiData &&
    apiData.map((i, k) => (
      <div key={k} className="GameItem">
        <h5>Title: {i.title}</h5>
        <p>Genre: {i.genre}</p>
        <p>Platform: {i.platform}</p>
        <p>Score: {i.score}</p>
      </div>
    ))
  );
};

export default Games;
