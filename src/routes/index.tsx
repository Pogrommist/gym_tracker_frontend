import { createBrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import ExercisesTab from "../pages/Exercises";
import ProfileTab from "../pages/Profile";
import RouterBottomNavigation from "./RouterBottomNavigation";
import TrainingTab from "../pages/Training";
import SettingsTab from "pages/Settings";
import withAppBar from "../shared/WithAppBar";
import PrivateRoute from "./PrivateRoute";
import AuthTab from "../pages/Auth";
import cogIcon from '../assets/images/Profile/Gear.svg';

const ProfileWithAppBar = withAppBar(ProfileTab, "Профиль", cogIcon);
const ExercisesWithAppBar = withAppBar(ExercisesTab, "Упражнения");
const TrainingWithAppBar = withAppBar(TrainingTab, "Тренировка");
const SettingsWithAppBar = withAppBar(SettingsTab, "Настройки профиля");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/exercises",
        element: <PrivateRoute element={ExercisesWithAppBar} />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={ProfileWithAppBar} />,
      },
      {
        path: "/training",
        element: <PrivateRoute element={TrainingWithAppBar} />,
      },
      {
        path: "/auth",
        element: <AuthTab />,
      },
      {
        path: "/settings",
        element: <PrivateRoute element={SettingsWithAppBar} />
      }
    ],
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
