import { Button, Paper, Skeleton, TextField, Typography } from "@mui/material";
import { ROUTES } from "../../app/routes";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/auth/useAuth";
import { useNavigate } from "react-router-dom";



type LoginInputs = {
    email: string;
    password: string;
}

export function Login(){
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<LoginInputs>();
    
    const {login, accessToken, isLoading, isError} = useAuth();

    const navigate =  useNavigate();

    const onSubmit = async (data: LoginInputs) => {
        await login(data.email, data.password);

        navigate(ROUTES.TEAMS);
    }

    return (
        <>
            {isLoading ? (
                <Skeleton animation="wave" />
            ) : (
                <div className="flex flex-row justify-center items-center h-screen  bg-gray-100">
                <Paper
                    elevation={0}
                    className="p-8 w-full max-w-sm">
                        <Typography variant="h4" className="text-center pb-6">
                            Вход
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
                                label="Password" 
                                type="password" 
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                {...register("password", {
                                    required: "Это поле обязательно"
                                })} />
                            <Button type="submit" variant="contained" className="primary" fullWidth disabled={isLoading}> Войти</Button>
                        </form>
                        <div className="mt-4 text-center text-sm text-gray-600">
                            Нет аккаунта? <a href={ROUTES.REGISTRATION} className="text-blue-600 hover:underline">Зарегистрироваться</a>
                        </div>
                        <div>
                            access token = {accessToken}
                        </div>
                </Paper>
                </div>
            )}
        </>
    )
}