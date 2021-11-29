const init = [];

const rootReducer = (state = init, action) => {
  switch (action.type) {
    case "":
    return ({
      ...state,
    });
    default:
      return state;
  }
};

export default rootReducer;