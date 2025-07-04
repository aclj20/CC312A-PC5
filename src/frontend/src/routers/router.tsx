import { createBrowserRouter, type RouteObject } from "react-router";
import { ROUTES } from "../shared/utils/routes";
import LandingPage from "../pages/LandingPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const routes: RouteObject[] = [
    { path: ROUTES.LANDING.ROOT, element: <LandingPage /> },
    { path: ROUTES.REGISTER.ROOT, element: <RegisterPage /> },
    { path: ROUTES.LOGIN.ROOT, element: <LoginPage /> }
]

const router = createBrowserRouter([
    ...routes
]);

export default router;