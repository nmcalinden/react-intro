import Axios from "axios";
import { getApiUrl } from "../config";

export const axios = Axios.create({
    baseURL: getApiUrl(),
});
