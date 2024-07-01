export const getWeatherIcon = (weathercode) => {
    // Map weathercode to icon file names
    const weatherCodeToIcon = {
        0: "01d", // clear
        1: "02d", // partly-cloudy
        2: "03d", // cloudy
        3: "04d", // overcast
        45: "50d", // fog
        48: "50d", // rime-fog
        51: "09d", // drizzle
        53: "09d", // drizzle
        55: "09d", // drizzle
        56: "09d", // freezing-drizzle
        57: "09d", // freezing-drizzle
        61: "10d", // rain
        63: "10d", // rain
        65: "10d", // rain
        66: "10d", // freezing-rain
        67: "10d", // freezing-rain
        71: "13d", // snow
        73: "13d", // snow
        75: "13d", // snow
        77: "13d", // snow-grains
        80: "09d", // rain-showers
        81: "09d", // rain-showers
        82: "09d", // rain-showers
        85: "13d", // snow-showers
        86: "13d", // snow-showers
        95: "11d", // thunderstorm
        96: "11d", // thunderstorm-hail
        99: "11d", // thunderstorm-hail
    };

    return weatherCodeToIcon[weathercode] || "unknown";
};