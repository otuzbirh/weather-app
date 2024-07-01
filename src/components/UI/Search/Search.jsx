import React, { useState, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEOPOSITION_API_URL, geoApiOptions } from "../../../api/api";
import cl from "./Search.module.scss";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      borderRadius: "10px",
      fontWeight: "Medium",
      border: "none",
      color: "#000",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "white" : null,
    }),
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEOPOSITION_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnSearch = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await fetch(
                `${GEOPOSITION_API_URL}/locations/${latitude}-${longitude}/nearbyPlaces?radius=100&limit=1`,
                geoApiOptions
              );
              const locationData = await response.json();
              if (locationData.data.length > 0) {
                const city = locationData.data[0];
                const searchData = {
                  value: `${latitude} ${longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
                setSearch(searchData);
                onSearchChange(searchData);
              }
            } catch (error) {
              console.error("Error fetching city name: ", error);
            }
          },
          (error) => {
            console.error("Error getting location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getCurrentLocation();
  }, [onSearchChange]);

  return (
    <AsyncPaginate
      className={cl.inputSearch}
      styles={customStyles}
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnSearch}
      loadOptions={loadOptions}
    />
  );
}
