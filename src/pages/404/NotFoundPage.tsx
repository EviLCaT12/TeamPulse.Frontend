import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";


export function NotFound() {
    const navigate = useNavigate();


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center p-4 gap-2">
            <Typography
                variant="h1"
                className="bg-gray-800 text-6xl font-bold mb-4">
                    404
            </Typography>
            <Typography
                variant="h5"
                className="bg-gray-700 text-2xl mb-2">
                    Страница не найдена
            </Typography>
            <Typography
                variant="h5"
                className="bg-gray-600 max-w-md mb-6">
                    Возможно, вы не правильно ввели адресс или страница была перемещена/удалена.
            </Typography>
            <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/')}>
                    Вернуться на главную
            </Button>
        </div>
    )
}