export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_API_DATA":
      return {
        ...state,
        apiData: payload,
      };

    default:
      return state;
  }
};
