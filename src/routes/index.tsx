import { createBrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import ExercisesTab from "../pages/Exercises";
import ProfileTab from "../pages/Profile";
import RouterBottomNavigation from "./RouterBottomNavigation";
import TrainingTab from "../pages/Training";
import withAppBar from "../pages/shared/WithAppBar";
import PrivateRoute from "./PrivateRoute";
import AuthTab from "../pages/Auth";

const ProfileWithAppBar = withAppBar(ProfileTab, 'Профиль')
const ExercisesWithAppBar = withAppBar(ExercisesTab, 'Упражнения')
const TrainingWithAppBar = withAppBar(TrainingTab, 'Тренировка')
const AuthWithAppBar = withAppBar(AuthTab, 'Войти/регистрация')

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/exercises',
        element: <PrivateRoute element={ExercisesWithAppBar} />,
      },
      {
        path: '/profile',
        element: <PrivateRoute element={ProfileWithAppBar} />
      },
      {
        path: '/training',
        element: <PrivateRoute element={TrainingWithAppBar} />
      },
      {
        path: '/auth',
        element: <AuthWithAppBar />
      }
    ]
  },
]);

export default function Root() {
  return (
    <>
      <Outlet />
      <RouterBottomNavigation />
    </>
  );
}