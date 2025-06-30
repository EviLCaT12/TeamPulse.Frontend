import { Box } from "@mui/material";
import { EmployeeCard, type EmployeeCardProps } from "./EmployeeCard";
import type React from "react";

type EmployeeGridProps = {
  employees: EmployeeCardProps[];
};


export const EmployeeGrid: React.FC<EmployeeGridProps> = ({ employees }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 2,
      }}
    >
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          id={emp.id}
          name={emp.name}
          email={emp.email}
          position={emp.position}
        />
      ))}
    </Box>
  );
};
