import React from "react"
import ReactDOM from "react-dom/client"
import InfoPage from "./info/InfoPage"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/ErrorPage";
import RulesPage from "./rules/RulesPage";
import LobbyPage from "./lobby/LobbyPage";
import GamePage from "./game/GamePage";
import TournamentPage from "./tournament/TournamentPage";
import Header from "./header/Header";
import {AdminPage} from "./admin/AdminPage";
import {ToastContainer} from "react-toastify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <InfoPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/rules",
        element: <RulesPage/>,
    },
    {
        path: "/lobby",
        element: <LobbyPage/>,
    },
    {
        path: "/tournament",
        element: <TournamentPage/>,
    },
    {
        path: "/game/:gameId",
        element: <GamePage/>,
    },
    {
        path: "/admin",
        element: <AdminPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ToastContainer/>
        <Header/>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
