import { createBrowserRouter } from "react-router";
import App from "./App"
import Error404 from "./path/Error404";
import Cart from "./path/Cart";
import Shop from "./path/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "shop",
        element: <Shop />
    }
])

export default router;