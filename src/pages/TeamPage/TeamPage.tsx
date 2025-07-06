import { Button } from "@mui/material";
import { EmployeeGrid } from "./components/EmployeeGrid";
import { AddEmployeeModalForm } from "./components/AddEmployeeForm";
import { useGetEmployeeByIdQuery } from "../../modules/teams/api";

export const TeamPage = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {} = useGetEmployeeByIdQuery({
    employeeId: "784fe9cc-4590-4373-91aa-b83c0bacbe5e",
  });

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



