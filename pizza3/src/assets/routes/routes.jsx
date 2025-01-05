import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Pizza from "../pages/Pizza";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/", element: <Login /> },
  { path: "/", element: <Register /> },
  { path: "/", element: <Cart /> },
  { path: "/", element: <Pizza /> },
];
export default routes;
