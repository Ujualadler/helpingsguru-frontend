import axios from "axios";
import { API_URL } from "../Services/url";

const getMagazine = () => {
  return axios.get(API_URL +"api/v1/magazine");
};

export const magazineService = {
  getMagazine,
};
