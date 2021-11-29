import {constants} from "../constants/index";
import {services} from "../services";

const deletePost = (id) => {
  return {
    type: constants.DELETE_POST,
    id: id
  }
};

const loadPosts = () => {
  return (dispatch) => {
    services.loadPosts()
    .then(response => {
      return dispatch({
        type: constants.LOAD_POSTS,
        payload: response.data.slice(0,9),
      });
    })
    .catch(err => console.error(`There was a problem - ${err}`));
  };
};

export const actions = {
  deletePost,
  loadPosts,
}