import React, { useContext } from "react";
import AppContext from "../state/appContext";
import { Filter } from "./";

const Header = () => {
  const state = useContext(AppContext);
  const { onFilter } = state;
  return (
    <>
      <h1 onClick={() => onFilter("All")}>Games Arena</h1>
      <Filter />
    </>
  );
};

export default Header;
