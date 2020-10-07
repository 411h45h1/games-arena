export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_API_DATA":
      return {
        ...state,
        apiData: payload,
      };

    case "FILTERED_LIST":
      return {
        ...state,
        filteredList: payload,
      };

    default:
      return state;
  }
};
