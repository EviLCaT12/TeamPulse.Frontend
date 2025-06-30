import { Box, Button, Modal, TextField, Typography } from "@mui/material";

type AddEmployeeModalFormProps = {
    open: boolean;
}

export const AddEmployeeModalForm = ({open}: AddEmployeeModalFormProps) => {
  return (
    <Modal open={open}>
      <Box
        className="bg-white p-6 rounded-lg shadow-lg"
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
        }}
      >
        <Typography variant="h6" className="mb-4 text-cyan-700 text-center">
          Новый сотрудник
        </Typography>
        <form className="flex flex-col gap-4 mt-4">
          <TextField label="Имя сотрудника" fullWidth></TextField>
          <TextField label="Почта" fullWidth></TextField>
          <TextField label="Должность" fullWidth></TextField>
          <Button variant="contained" type="submit">
            Добавить
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
