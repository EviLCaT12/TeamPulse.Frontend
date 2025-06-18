import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";
import { Login } from "../pages/Login/LoginPage";
import { Registration } from "../pages/Registration/RegistrationPage";
import { NotFound } from "../pages/404/NotFoundPage";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <RootLayout />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <Login></Login>
            },
            {
                path: ROUTES.REGISTRATION,
                element: <Registration></Registration>
            }
        ],
        errorElement: <NotFound></NotFound>
    },
])