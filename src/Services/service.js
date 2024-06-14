import axios from "axios";
import { API_URL } from "./url";

const postService = (data) => {
  return axios.post(API_URL +"api/v1/service",data);
};

const getTeacherGallery =()=>{
    return axios.get(API_URL + "api/v1/teacher-gallery" )
}

export const serviceService = {
    postService,
    getTeacherGallery
};
