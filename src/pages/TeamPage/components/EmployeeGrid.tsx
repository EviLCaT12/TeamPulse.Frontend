import { Box } from "@mui/material";
import { EmployeeCard } from "./EmployeeCard";
import type React from "react";
import type { User } from "../../../models/user";

type EmployeeGridProps = {
  employees: User[];
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
          userName={emp.userName}
          email={emp.email}
          position={emp.position}
        />
      ))}
    </Box>
  );
};
