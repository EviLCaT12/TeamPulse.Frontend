import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";

export type EmployeeId = string;

export type Employee = {
    id: EmployeeId;
    isHeadOfTeam: boolean;
    isHeadOfDepartment: boolean;
    teamId: string;  
    departmentId: string;
}

export type EmployeeState = {
    employees: Employee[]
}

const initialState: EmployeeState = {
    employees: []
}

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        setEmployees: (state, { payload: employees }: PayloadAction<Employee[]>) => {
            state.employees = employees;
        }
    },
})

export default employeeSlice.reducer;
