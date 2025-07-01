import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from "@mui/material";
import React from "react";
import type { Employee } from "../../../modules/teams/employeeSlice";

export const EmployeeCard: React.FC<Employee> = ({
    id,
    isHeadOfTeam,
    isHeadOfDepartment,
}) => {
  return (
    <Card variant="outlined">
      <React.Fragment>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {id}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              wordBreak: "break-word",
              color: "text.primary",
            }}
          >
            {isHeadOfTeam}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {isHeadOfDepartment}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Перейти к сотруднику</Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};
