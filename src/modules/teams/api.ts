import { baseApi } from "../../shared/api"
import type { Employee } from "./employeeSlice";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeById: builder.query<Employee, {employeeId: string}>({
            query: ({employeeId}) => ({
                url: '/employee',
                params: {employeeId} 
            }),
            transformResponse: (res: {result: {item : Employee}}) => res.result.item 
        }),
    }),
});

export const {useGetEmployeeByIdQuery} = employeeApi;