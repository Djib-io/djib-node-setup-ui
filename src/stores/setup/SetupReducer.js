const setupReducer = (state, action) => {
    switch (action.type) {
      case "SETUP_INFO":
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default setupReducer;
  