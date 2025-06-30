import { Button, Paper, TextField, Typography } from "@mui/material";
import { ROUTES } from "../../app/routes";
import { useForm } from "react-hook-form";


type RegisterFields = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export function Registration() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<RegisterFields>();

    const onSubmit = (data: RegisterFields) => {
        console.log(data);
    }

    const password = watch("password");

    return (
        <div className="flex felx-row justify-center items-center h-screen bg-gray-100">
            <Paper
                elevation={0}
                className="p-8 w-full max-w-sm">
                    <Typography
                        variant="h4" className="text-center pb-6">
                            Регистрация
                    </Typography>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <TextField 
                            label="Email"
                            type="email" 
                            fullWidth 
                            error={!!errors.email}
                            helperText={errors.email?.message} 
                            {...register("email", {
                                required: "Это поле обязательно"
                            })} />
                        <TextField 
                            label="Имя" 
                            fullWidth 
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            {...register("name", {
                                required: "Это поле обязательно",
                                maxLength: 25
                            })} />
                        <TextField 
                            label="Пароль" 
                            type="password" 
                            fullWidth 
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            {...register("password", {
                                required: "Это поле обязательно для заполнения"
                            })}
                            />
                        <TextField 
                            label="Повторить пароль" 
                            type="password" 
                            fullWidth 
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword?.message}
                            {...register("confirmPassword", {
                                required: "Это поле обязательно для заполнения",
                                validate: (value) => {
                                    if (value !== password) {
                                        return "Пароли не совпадают"
                                    }
                                }
                            })}
                            />
                        <Button type="submit" variant="contained" className="primary" fullWidth>Зарегистрироваться</Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Уже есть аккаунт? <a href={ROUTES.LOGIN} className="text-blue-600 hover:underline">Войти</a>
                        </div>
                </Paper>
        </div>
    );
}