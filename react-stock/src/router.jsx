import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems.jsx";
import CreateItem from "./pages/items/CreateItem.jsx";
import ShowItem from "./pages/items/ShowItem.jsx";
import UpdateItem from "./pages/items/UpdateItem.jsx";
import Home from "./pages/Home.jsx";
import ItemsLayout from "./pages/items/Layout.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home/> },
        {
            path: "items",
            element: <ItemsLayout/>,
            children: [
                {index:true, element:<ListItems/>},
                {path:"new", element:<CreateItem/>},
                {path: ":id", element:<ShowItem/>},
                {path: ":id/update", element:<UpdateItem/>},
            ]
        }
    ]
}])

export default router