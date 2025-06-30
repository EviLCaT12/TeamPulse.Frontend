import axios from "axios";
import { ROUTES } from "../app/routes";


export const api = axios.create({
    baseURL: ROUTES.API.API_URL,
    withCredentials: true,
 })