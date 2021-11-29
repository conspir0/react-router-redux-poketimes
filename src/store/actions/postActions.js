import constants from "../constants/index";

export const deletePost = (id) => {
  return {
    type: constants.DELETE_POST,
    id: id
  }
};