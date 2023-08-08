import './index.css';
import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import ReactDOM from "react-dom/client";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
// import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';

function App() {
  
const [userName, setUserName] = useState();

//authentication
useEffect(() => {
  // Make an API call and send username and password
  const data = {
    name: "Akshay Saini",
  };
  setUserName(data.name);
}, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>

    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
}
const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /> </Suspense> 
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<App />)
export default App;

