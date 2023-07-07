import React from "react";
import './home.css'
import { useNavigate } from "react-router-dom";
export const Home = () => {
const navigate = useNavigate();

const navigateTo = (link) => {
    navigate(link);
}
  return (
    <>
      <h1>Welcome</h1>

      <h3>Please select one of the sub apps from below</h3>

      <div className="appGrid">
        <div className="box" onClick={() => navigateTo('todo')}>
          <h3>To Do List App</h3>
        </div>

        <div className="box" onClick={() => navigateTo('shoppingCart')}>
          <h3>Shopping List App</h3>
        </div>

        <div className="box" onClick={() => navigateTo('weather')}>
          <h3>Weather Data App</h3>
        </div>
      </div>
    </>
  );
};
