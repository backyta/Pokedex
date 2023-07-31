import { Navigate } from 'react-router-dom';
// import { ErrorPage, HomePage, LoginPage, AboutPage, MainApp } from './09-useContext';
import { AboutPage } from "./AboutPage";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { MainApp } from "./MainApp";


export const routesConfig = [
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children:[
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "about",
      element: <AboutPage />
    },
    {
      path:"*",
      element: <Navigate to="/" replace />
    }
  ]
}
];
