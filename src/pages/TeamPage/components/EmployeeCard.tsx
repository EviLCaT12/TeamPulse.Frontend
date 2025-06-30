import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from "@mui/material";
import React from "react";
import type { User } from "../../../models/user";

export const EmployeeCard: React.FC<User> = ({
  id,
  userName,
  email,
  position,
}) => {
  return (
    <Card variant="outlined">
      <React.Fragment>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {userName}
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              wordBreak: "break-word",
              color: "text.primary",
            }}
          >
            {email}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {position}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Перейти к сотруднику</Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};
