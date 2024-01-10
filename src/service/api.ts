import axios from "axios";
import { AppError } from "../utils/AppError";

const YOUR_IP = "localhost";

const api = axios.create({
  baseURL: `http://${YOUR_IP}:3333`,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
