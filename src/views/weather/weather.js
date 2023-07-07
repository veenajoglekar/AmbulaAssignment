import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const formatTime = (tm) => {
    return `${
      new Date(tm).getDate() +
      "/" +
      (new Date(tm).getMonth() + 1) +
      "/" +
      new Date(tm).getFullYear() +
      " " +
      (new Date(tm).getHours() < 10 ? '0' + new Date(tm).getHours() : new Date(tm).getHours()  ) +
      " : " +
      (new Date(tm).getMinutes() < 10 ? '0' + new Date(tm).getMinutes() : new Date(tm).getMinutes()  ) 
      
    }`;
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&hourly=temperature_2m,rain,showers"
      )
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res);
        let keys = Object.keys(res.hourly);
        let arr = res.hourly[keys[0]].slice(0, 12).map((val, index) => {
          let obj = {};

          keys.forEach((key) => {
            obj[key] = res.hourly[key][index];
          });
          return obj;
        });
        console.log(arr);
        setWeatherData(arr);
        setIsLoading(false);

      });
  }, []);
  return (
    <>
    {
      !isLoading ? (
<div style={{marginLeft: '100px', overflowY: "visible"}}>
        <h2>Weather Forecast Data</h2>

        <table
          class="styled-table"
          style={{ color: "white", overflowY: "scroll" , maxHeight: '700px'}}
        >
          <thead>
            <tr>
              <th style={{ color: "white" }}>Date & Time</th>
              <th style={{ color: "white" }}>Temperature</th>
              <th style={{ color: "white" }}>Rain (in mm)</th>
              <th style={{ color: "white" }}>Showers (in mm)</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((item, i) => {
              return (
                <tr>
                  <td>{formatTime(item.time)}</td>
                  <td>{item.temperature_2m}</td>
                  <td>{item.rain}</td>
                  <td>{item.showers}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ) : (
        <h2 style={{marginTop: '0'}}>Loading... Please wait</h2>
      )
    }
      
    </>
  );
};
