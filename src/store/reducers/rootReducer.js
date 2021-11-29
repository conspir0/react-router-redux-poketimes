import constants from "../constants";

const init = {
  posts: [{id: "1", title: "title", body: "body"},]
};

const rootReducer = (state = init, action) => {
  switch (action.type) {
    case constants.DELETE_POST:
    return ({
      ...state,
      posts: state.posts.filter(post => post.id !== action.id),
    });
    default:
      return state;
  }
};

export default rootReducer;