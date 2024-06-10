import axios from "axios";
import { API_URL } from "./url";

const getGallery = () => {
  return axios.get(API_URL +"api/v1/gallery");
};

export const galleryService = {
  getGallery,
};
