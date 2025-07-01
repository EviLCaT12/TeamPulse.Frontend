import { Box } from "@mui/material";
import { EmployeeCard } from "./EmployeeCard";
import type React from "react";
import type { Employee } from "../../../modules/teams/employeeSlice";

type EmployeeGridProps = {
  employees: Employee[];
};


export const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => {
  const employeesArray = Array.isArray(employees) ? employees : [employees];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
      }}
    >
      {employeesArray.map((emp) => (
        <EmployeeCard
          key={emp.id}
          id={emp.id}
          isHeadOfTeam={emp.isHeadOfTeam}
          isHeadOfDepartment={emp.isHeadOfDepartment}
          teamId={emp.teamId}
          departmentId={emp.departmentId}
        />
      ))}
    </Box>
  );
};
