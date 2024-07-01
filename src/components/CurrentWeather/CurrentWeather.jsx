import React from "react";
import styles from "./CurrentWeather.module.scss";
import { getWeatherIcon } from "../../helpers/functions";

export default function CurrentWeather({ data }) {
  return (
    <div className={styles.currentWidget}>
      <div className={styles.wrapperTop}>
        <div className={styles.infoLeft}>
          <div className={styles.temp}>{Math.round(data.temperature)}°C</div>
          <div className={styles.day}>Today</div>
        </div>
        <div className={styles.infoRight}>
          <img
            src={`icons/${getWeatherIcon(data.weathercode)}.png`}
            alt="Weather Icon"
          />
        </div>
      </div>
      <div className={styles.wrapperBottom}>
        <div className={styles.city}>City: {data.city}</div>
      </div>
    </div>
  );
}
