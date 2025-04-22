import initialState from "../db/data";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // Reset all filters and return the initial state
    case "ALL":
      return initialState;

    case "SEARCH_PRODUCT":
      if (action.payload === "") {
        // If the search value is empty, return the initial state
        return initialState;
      } else {
        // Filter products where name includes the search value
        return initialState.filter((product) => {
          return product.title.toLowerCase().includes(action.payload);
        });
      }

    case "FILTER_BY_BRAND":
      // Filter products where company matches the selected brand
      if (action.payload === "All") {
        // If the selected brand is "All", return the initial state
        return initialState;
      }
      return initialState.filter(
        (product) => product.company === action.payload
      );

    case "FILTER_BY_CATEGORY":
      // Filter products where category matches the selected category
      console.log("category", action.payload);
      return action.payload === "ALL"
        ? initialState
        : initialState.filter((product) => product.category === action.payload);
    case "FILTER_BY_COLOR":
      // Filter products where color matches the selected color
      return initialState.filter((product) => product.color === action.payload);
    case "FILTER_BY_PRICE":
      // Filter products where price matches the selected color
      return initialState.filter(
        (product) => product.newPrice === action.payload
      );
    default:
      return state;
  }
};

export default Reducer;
