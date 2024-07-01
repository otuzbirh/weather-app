import React from "react";
import styles from "./Forecast.module.scss";
import { getWeatherIcon } from "../../helpers/functions";

export default function Forecast({ data, days }) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInWeek = new Date().getDay();

  const forecastDays = weekDays
    .slice(dayInWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInWeek));

  return (
    <div className={styles.widgetForecast} style={{ marginTop: "50px" }}>
      {data.daily.time.slice(0, days).map((date, id) => (
        <div className={styles.widgetItem} key={id}>
          <div className={styles.day}>{forecastDays[id]}</div>
          <div className={styles.icon}>
            <img
              src={`icons/${getWeatherIcon(data.daily.weathercode[id])}.png`}
              alt="Icon"
            />
          </div>
          <div className={styles.max}>
            +{Math.round(data.daily.temperature_2m_max[id])}°C
          </div>
          <div className={styles.min}>
            +{Math.round(data.daily.temperature_2m_min[id])}°C
          </div>
          <div className={styles.description}>{data.daily.weathercode[id]}</div>
        </div>
      ))}
    </div>
  );
}
