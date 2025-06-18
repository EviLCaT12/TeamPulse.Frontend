import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RoorLayout";
import { Login } from "../pages/Login/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "team-pulse",
                element: <div>Прила</div>,
            },
            {
                path: "teams",
                element: <div>Команды</div>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ],
        errorElement: <div>Тут будет 404</div>
    },
])