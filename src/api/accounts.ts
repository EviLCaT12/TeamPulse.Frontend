import axios, { type AxiosResponse } from "axios";
import { ROUTES } from "../app/routes";
import type { Envelope } from "../models/Envelope";
import type { LoginResponse } from "../models/LoginResponse";
import { api } from "./api";


export class AccountService {
    static async login(
        email: string,
        password: string
        ) : Promise<AxiosResponse<Envelope<LoginResponse>>> {
        return axios.post<Envelope<LoginResponse>>(ROUTES.API.API_URL + "account/login", {
            email,
            password
        },
        {
          withCredentials: true  
        });
    }

    static async refresh() {
        return axios.post<Envelope<LoginResponse>>(
            ROUTES.API.API_URL + "account/refresh",
            {},
            {
                withCredentials: true
            }
        );
    }

    static async logout() {
        return api.post<Envelope<LoginResponse>>("account/logout")
        }
}