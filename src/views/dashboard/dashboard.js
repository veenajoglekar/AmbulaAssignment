import React from "react";
import { Link, Outlet, Route, Routes  } from "react-router-dom";
import "./dashboard.css";
import { Home } from "../home/home";
import { Todo } from "../todolist/todo";
import { ShoppingCart } from "../shoppingcart/shoppingCart";
import { Weather } from "../weather/weather";
import { About } from "../about/about";
import { Contactus } from "../contactus/contactus";


export const Dashboard = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="weather">Weather Data</Link>
          </li>
        </ul>
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="about" element={<About />} />
          <Route path="todo" element={<Todo />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="weather" element={<Weather />} />
          <Route path="contact" element={<Contactus />} />
        </Routes>
        <Outlet />
      </div>
    </>
  );
};
