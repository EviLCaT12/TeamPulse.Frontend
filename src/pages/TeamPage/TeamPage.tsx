import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { EmployeeGrid } from "./components/EmployeeGrid";
import type { User } from "../../models/user";
import { AddEmployeeModalForm } from "./components/AddEmployeeForm";

export const mockEmployees: User[] = [
  {
    id: "1",
    userName: "Иван Иванов",
    email: "ivan.ivanov@example.com",
    position: "Frontend Developer",
  },
  {
    id: "2",
    userName: "Мария Смирнова",
    email: "maria.smirnova@example.com",
    position: "Backend Developer",
  },
  {
    id: "3",
    userName: "Олег Петров",
    email: "oleg.petrov@example.com",
    position: "Project Manager",
  },
  {
    id: "4",
    userName: "Елена Кузнецова",
    email: "elena.kuznetsova@example.com",
    position: "QA Engineer",
  },
  {
    id: "5",
    userName: "Алексей Фёдоров",
    email: "alexey.fedorov@example.com",
    position: "UI/UX Designer",
  },
];

export const TeamPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-cyan-800">Моя команда</h1>
        <Button variant="contained" onClick={handleOpen}>
          Добавить сотрудника
        </Button>
      </div>
      <EmployeeGrid employees={mockEmployees}></EmployeeGrid>
      
      <AddEmployeeModalForm open={open}></AddEmployeeModalForm>
    </div>
  );
};
