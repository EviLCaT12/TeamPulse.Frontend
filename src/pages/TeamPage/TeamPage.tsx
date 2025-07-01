import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { EmployeeGrid } from "./components/EmployeeGrid";
import { AddEmployeeModalForm } from "./components/AddEmployeeForm";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setEmployees} from "../../modules/teams/employeeSlice";
import { api } from "../../api/api";

export const TeamPage = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee.employees);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    api
      .get("http://localhost:5112/api/Employee/83003b4c-b864-4d94-abc9-23099d90730f")
      .then((res) => res.data)
      .then((data) => dispatch(setEmployees(data.result)));

  }, [dispatch]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-cyan-800">Моя команда</h1>
        <Button variant="contained" onClick={handleOpen}>
          Добавить сотрудника
        </Button>
      </div>
      <EmployeeGrid employees={employees}></EmployeeGrid>

      <AddEmployeeModalForm
        open={open}
        handleClose={handleClose}
      ></AddEmployeeModalForm>
    </div>
  );
};
