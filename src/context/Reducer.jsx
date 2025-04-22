import initialState from "../db/data";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      // Filter products where name includes the search value
      return state.filter((product) => {
        return product.title.toLowerCase().includes(action.payload);
      });

    case "FILTER_BY_BRAND":
      // Filter products where company matches the selected brand
      return state.filter((product) => product.company === action.payload);
    case "FILTER_BY_CATEGORY":
      // Filter products where category matches the selected category
      return state.filter((product) => product.category === action.payload);
    case "FILTER_BY_COLOR":
      // Filter products where color matches the selected color
      return state.filter((product) => product.color === action.payload);
    case "FILTER_BY_PRICE":
      // Filter products where price matches the selected color
      return state.filter((product) => product.newPrice === action.payload);
    default:
      return state;
  }
};

export default Reducer;
