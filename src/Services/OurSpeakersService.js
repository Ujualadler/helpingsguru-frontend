import axios from "axios";
import { API_URL } from "../Services/url";
import { handleBreakpoints } from "@mui/system";

const getOurSpeakers = () => {
  return axios.get(API_URL + "api/v1/our-speakers");
};

export const ourSpeakersService = {
  getOurSpeakers,
};


