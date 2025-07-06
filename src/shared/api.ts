import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROUTES } from "../app/routes";


const baseUrl = ROUTES.API.API_URL;

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: () => ({})
})