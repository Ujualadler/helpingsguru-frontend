import axios from "axios";
import { API_URL } from "./url";

const postBooking = (data) => {
  return axios.post(API_URL +"api/v1/booking",data);
};

export const BookingService = {
  postBooking,
};
