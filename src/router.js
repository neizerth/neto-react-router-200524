import {
    createBrowserRouter
} from "react-router-dom";

import { HomeRoute } from "./components/routes/HomeRoute";
import { ContactsRoute } from "./components/routes/ContactsRoute";
import { ReciepsRoute } from "./components/routes/ReciepsRoute";
import { RecipeDetailsRoute, loader as reciepsLoader } from "./components/routes/RecipeDetailsRoute";

import { MainTemplate } from "./components/layout/MainTemplate";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainTemplate/>,
        children: [
            {
                path: "/",
                exact: true,
                element: <HomeRoute/>,
            },
            {
                path: "/contacts",
                element: <ContactsRoute/>
            },
            {
                exact: true,
                path: "/recieps",
                element: <ReciepsRoute/>,
            },
            {
                path: "/recieps/:id",
                element: <RecipeDetailsRoute/>,
                loader: reciepsLoader
            }
        ]
    },
]);