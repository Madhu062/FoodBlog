import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter ,RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import ReactDOM from "react-dom/client";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
       { path:"/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement :<Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<App />)
export default App;

