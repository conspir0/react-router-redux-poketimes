import {constants} from "../constants";

const init = {
  posts: []
};

const rootReducer = (state = init, action) => {
  switch (action.type) {
    case constants.DELETE_POST:
    const posts = state.posts.filter(post => post.id !== action.id);

    return ({
      ...state,
      posts,
    });
    case constants.LOAD_POSTS:
      return({
        ...state,
        posts: action.payload
      })
    default:
      return state;
  }
};

export default rootReducer;