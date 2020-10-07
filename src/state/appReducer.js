export default (state, { type, payload }) => {
  switch (type) {
    case "LOAD_API_DATA":
      return {
        ...state,
      };

    default:
      return state;
  }
};
