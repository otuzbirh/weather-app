Project Documentation: Weather Dashboard
Project Overview
This project is a Weather Dashboard application built using React.js. The application fetches and displays current and forecast weather data for a specified location using the Open Meteo API. The application also includes a search functionality that allows users to look up weather information for different cities.

Prerequisites
Before you begin, ensure you have met the following requirements:

You have a modern web browser installed.
You have Node.js installed, version 18 or higher.
You have npm installed.
Installation
Clone the repository:

git clone <repository-url>
cd <repository-directory>
Install dependencies:

npm install
Create a .env file in the root directory:

REACT_APP_RAPID_API_KEY=<your-rapid-api-key>
Running the Application
Start the development server:

npm start
The application will be available at http://localhost:3000.

Technologies Used
React.js
React.js is a popular JavaScript library for building user interfaces, especially single-page applications. Its component-based architecture makes it easy to build and maintain complex UIs.
Why React.js?
Efficient updating and rendering of components.
Strong community support and a large ecosystem of libraries.
Easy to learn and use with its declarative syntax.
SCSS
SCSS (Sassy CSS) is a CSS preprocessor that adds functionality such as variables, nested rules, and mixins, making it easier to manage and maintain CSS.
Why SCSS?
Enhanced modularity with partials and imports.
Reusability through mixins and functions.
Better readability and organization of CSS code.
Axios
Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests and handling responses.
Why Axios?
Simple and easy-to-use API.
Automatic JSON data transformation.
Intercepting requests and responses for better control.

Environment Variables
REACT_APP_RAPID_API_KEY: Your Rapid API key for accessing the GeoDB Cities API.
Key Components
Search
A component that allows users to search for a city and select it from the list of suggestions.
CurrentWeather
A component that displays the current weather for the selected city.
CurrentWeatherDescription
A component that provides detailed information about the current weather, including temperature, humidity, pressure, and wind speed.
Forecast
A component that shows the weather forecast for the next few days.
Hooks
useWeatherData
A custom hook that handles fetching weather data from the Open Meteo API based on the user's search input.
API Integration
GeoDB Cities API
Used for fetching city suggestions based on user input.
Endpoint: https://wft-geo-db.p.rapidapi.com/v1/geo/cities
Open Meteo API
Used for fetching current weather and forecast data.
Endpoints:
Current Weather:
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
Forecast:
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto
Troubleshooting
Environment Variable Issues:

Ensure your .env file is correctly set up and the REACT_APP_RAPID_API_KEY is valid.
API Request Errors:

Check the network tab in the browser developer tools for the full error message.
Ensure that the API endpoints and query parameters are correctly formatted.
Styling Issues:

Verify the SCSS files are correctly imported and compiled.
Conclusion
This Weather Dashboard application is a robust solution for fetching and displaying weather data. By leveraging React.js, the project ensures a responsive and maintainable codebase. The use of environment variables for API keys enhances security and flexibility, making this project a great foundation for further development and customization.
