import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";
import Error from "./ui/Error.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
