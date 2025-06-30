import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from "@mui/material";
import React from "react";

export type EmployeeCardProps = {
  id: string;
  name: string;
  email: string;
  position: string;
};

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
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
            {name}
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
