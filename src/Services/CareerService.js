import axios from "axios";
import { API_URL } from "./url";

const getCareer = () => {
  return axios.get(API_URL + "api/v1/career");
};

const postCareer = (data) => {
  // Create an instance of FormData


  return axios.post(API_URL + "api/v1/career/apply-job", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const careerService = {
  getCareer,
  postCareer,
};
