import { Button, Paper, TextField, Typography } from "@mui/material";
import { ROUTES } from "../../app/routes";


export function Login(){

    return (
        <div className="flex flex-row justify-center items-center h-screen  bg-gray-100">
            <Paper
                elevation={0}
                className="p-8 w-full max-w-sm">
                    <Typography variant="h4" className="text-center pb-6">
                        Вход
                    </Typography>
                    <form className="flex flex-col gap-4">
                        <TextField label="Email" type="email" fullWidth required></TextField>
                        <TextField label="Password" type="password" fullWidth required></TextField>
                        <Button variant="contained" className="primary" fullWidth> Войти</Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Нет аккаунта? <a href={ROUTES.REGISTRATION} className="text-blue-600 hover:underline">Зарегистрироваться</a>
                    </div>
            </Paper>
        </div>
    )
}