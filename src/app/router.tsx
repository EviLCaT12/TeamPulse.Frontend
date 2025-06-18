import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RoorLayout";
import { Login } from "../pages/Login/LoginPage";
import { Registration } from "../pages/Registration/RegistrationPage";
import { NotFound } from "../pages/404/NotFoundPage";

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
            },
            {
                path: "registration",
                element: <Registration></Registration>
            }
        ],
        errorElement: <NotFound></NotFound>
    },
])