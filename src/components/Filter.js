import React, { useState, useEffect, useContext } from "react";
import AppContext from "../state/appContext";

const Filter = () => {
  const state = useContext(AppContext);
  const { onFilter } = state;

  return (
    <div className="FilterArea">
      <button onClick={() => onFilter("PlayStation Vita")}>
        PlayStation Vita
      </button>
      <button onClick={() => onFilter("iPad")}>iPad</button>
      <button onClick={() => onFilter("Xbox 360")}>Xbox 360</button>
      <button onClick={() => onFilter("PlayStation 3")}>PlayStation 3</button>
      <button onClick={() => onFilter("Macintosh")}>Macintosh</button>
      <button onClick={() => onFilter("PC")}>PC</button>
      <button onClick={() => onFilter("iPhone")}>iPhone</button>
      <button onClick={() => onFilter("Nintendo DS")}>Nintendo DS</button>
    </div>
  );
};

export default Filter;
