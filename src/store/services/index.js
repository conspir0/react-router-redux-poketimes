import axios from "axios";
import { config } from "../config";

const loadPosts = () => {
  return axios({
    url: config.URL,
    method: "GET",
  });
};

export const services = {
  loadPosts,
};