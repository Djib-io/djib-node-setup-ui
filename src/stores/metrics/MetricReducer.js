const metricReducer = (state, action) => {
    switch (action.type) {
      case "METRIC":
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default metricReducer;
  