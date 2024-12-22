import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "/index.css";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Cart from "./components/Cart";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = { name: "Mahadev Athani", id: 8977 };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={store}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            { path: "/contact", element: <Contact /> },
            { path: "/restaurant/:resId", element: <RestaurantMenu /> },
            { path: "/cart", element: <Cart /> },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
