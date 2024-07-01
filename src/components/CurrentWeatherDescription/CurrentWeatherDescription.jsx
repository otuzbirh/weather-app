import React from "react";
import cl from "./CurrentWeatherDescription.module.scss";

export default function CurrentWeatherDescription({ data }) {
  return (
    <div className={cl.currentWidgetDescription}>
      <div className={cl.line}>
        <div className={cl.icon}>
          <img src="icons/temperature.svg" alt="Temperature" />
        </div>
        <div className={cl.name}>Temperature</div>
        <div className={cl.text}>
          {Math.round(data.temperature)}°C - feels like{" "}
          {Math.round(data.detailed.current.apparent_temperature)}°C
        </div>
      </div>
      <div className={cl.line}>
        <div className={cl.icon}>
          <img src="icons/pressure.svg" alt="Pressure" />
        </div>
        <div className={cl.name}>Pressure</div>
        <div className={cl.text}>
          {data.detailed.current.surface_pressure
            ? `${data.detailed.current.surface_pressure} hPa`
            : "N/A"}
        </div>
      </div>
      <div className={cl.line}>
        <div className={cl.icon}>
          <img src="icons/precipitation.svg" alt="Precipitation" />
        </div>
        <div className={cl.name}>Humidity</div>
        <div className={cl.text}>
          {data.detailed?.current.relative_humidity_2m
            ? `${data.detailed.current.relative_humidity_2m}%`
            : "N/A"}
        </div>
      </div>
      <div className={cl.line}>
        <div className={cl.icon}>
          <img src="icons/wind.svg" alt="Wind" />
        </div>
        <div className={cl.name}>Wind</div>
        <div className={cl.text}>{data.windspeed} m/s</div>
      </div>
    </div>
  );
}
