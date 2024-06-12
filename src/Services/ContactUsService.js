import axios from "axios";
import { API_URL } from "./url";

const postContactUs = (data) => {
  console.log(data);
  return axios.post(API_URL + "api/v1/contact-us", data);
};

export const contactUsService = {
  postContactUs,
};
