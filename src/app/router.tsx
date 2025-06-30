import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";
import { Login } from "../pages/Login/LoginPage";
import { Registration } from "../pages/Registration/RegistrationPage";
import { NotFound } from "../pages/404/NotFoundPage";
import { ROUTES } from "./routes";
import { EmployeeGrid } from "../pages/TeamPage/components/EmployeeGrid";
import type { User } from "../models/user";
import { ProfilePage } from "../pages/Profile";

export const mockEmployees: User[] = [
  {
    id: "1",
    userName: "Иван Иванов",
    email: "ivan.ivanov@example.com",
    position: "Frontend Developer",
  },
  {
    id: "2",
    userName: "Мария Смирнова",
    email: "maria.smirnova@example.com",
    position: "Backend Developer",
  },
  {
    id: "3",
    userName: "Олег Петров",
    email: "oleg.petrov@example.com",
    position: "Project Manager",
  },
  {
    id: "4",
    userName: "Елена Кузнецова",
    email: "elena.kuznetsova@example.com",
    position: "QA Engineer",
  },
  {
    id: "5",
    userName: "Алексей Фёдоров",
    email: "alexey.fedorov@example.com",
    position: "UI/UX Designer",
  },
];

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login></Login>,
      },
      {
        path: ROUTES.REGISTRATION,
        element: <Registration></Registration>,
      },
      {
        path: ROUTES.TEAMS,
        element: <EmployeeGrid employees={mockEmployees}></EmployeeGrid>,
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage></ProfilePage>
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
