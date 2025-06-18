import { Button, Paper, TextField, Typography } from "@mui/material";
import { ROUTES } from "../../app/routes";


export function Registration() {


    return (
        <div className="flex felx-row justify-center items-center h-screen bg-gray-100">
            <Paper
                elevation={0}
                className="p-8 w-full max-w-sm">
                    <Typography
                        variant="h4" className="text-center pb-6">
                            Регистрация
                    </Typography>
                    <form className="flex flex-col gap-4">
                        <TextField label="Email" type="email" fullWidth required></TextField>
                        <TextField label="Имя" fullWidth required></TextField>
                        <TextField label="Пароль" type="password" fullWidth required></TextField>
                        <TextField label="Повторить пароль" type="password" fullWidth required></TextField>
                        <Button variant="contained" className="primary" fullWidth>Зарегистрироваться</Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Уже есть аккаунт? <a href={ROUTES.LOGIN} className="text-blue-600 hover:underline">Войти</a>
                        </div>
                </Paper>
        </div>
    );
}