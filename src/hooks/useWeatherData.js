import { useState } from "react";
import { WEATHER_API_URL } from "../api/api";

export const useWeatherData = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [latitude, longitude] = searchData.value.split(' ');

		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
		);

		const detailedCurrentWeatherFetch = fetch(
			`${WEATHER_API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&current=relative_humidity_2m,surface_pressure,apparent_temperature`
		);

		const forecastWeatherFetch = fetch(
			`${WEATHER_API_URL}/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
		);

		Promise.all([currentWeatherFetch, detailedCurrentWeatherFetch, forecastWeatherFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const detailedWeatherResponse = await response[1].json();
				const forecastResponse = await response[2].json();

				setCurrentWeather({
					city: searchData.label,
					detailed: detailedWeatherResponse,
					...weatherResponse.current_weather,

				});

				setForecastWeather({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};

	return [currentWeather, forecastWeather, handleOnSearchChange];
};
