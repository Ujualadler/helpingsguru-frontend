import axios from "axios";
import {API_URL} from '../Services/url';


const getEvents = () => {
    return axios.get(
      API_URL + "api/v1/event",
    );
  };
const getUpcomingEvents = () => {
    return axios.get(
      API_URL + "api/v1/event/upcoming",
    );
  };




  export const eventService = {
    getEvents,
    getUpcomingEvents
    
}