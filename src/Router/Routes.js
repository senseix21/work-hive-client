import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/services', element: <Services></Services>,
                loader: async () => {
                    return fetch(`https://work-hive-server.vercel.app/services`);
                }
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://work-hive-server.vercel.app/services/${params.id}`)
                }
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <SignUp></SignUp> },
            { path: '*', element: <NotFound></NotFound> }
        ]
    }
])