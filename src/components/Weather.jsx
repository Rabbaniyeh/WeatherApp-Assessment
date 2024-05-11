
import { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import { FaSearch } from "react-icons/fa";
import Temperature from "./Temperature";

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [message, setMessage] = useState('Please enter city name')
    const [city, setCity] = useState("");

    const apiKey = "e92a06a4ab87c566f932918f6e0184a3"; //Stored API key in const for now, it should be in .env file

    const fetchWeatherData = async () => {
        setWeatherData(null)
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();
            if (data.cod == 404) {
                setMessage('City not found')
                return
            }
            setWeatherData(data);
            setMessage('')
        } catch (error) {
            setMessage('City not found, please recheck city name')
            console.error("Error fetching weather data:", error);
        }
    };

    const handleSearch = () => {
        fetchWeatherData();
    };
    const handleInputFocus = () => {
        if (!city) {
            setWeatherData(null);
        }
    };
    const onInputChange = (e) => {
        if (e.target.value === '') {
            setMessage('Please enter city name')
        }
        setCity(e.target.value);
    }
    return (
        <div className="bg-slate-700 w-full h-screen bg-weather bg-no-repeat bg-cover">
            <div className="flex items-center justify-center pt-4">
                <input
                    type="text"
                    placeholder="Search for city...."
                    className="text-lg p-2 w-60 shadow-xl focus:outline-none rounded-lg"
                    value={city}
                    onChange={(e) => onInputChange(e)}
                    onFocus={handleInputFocus}
                />
                <FaSearch
                    size={25}
                    className="ml-4 text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearch}
                />
                
            </div>
            <p className="text-white mt-8 text-center text-xl">{message}</p>
            {weatherData != null && <>
            <div className="absolute top-1/4 left-10 md:left-40">
                <Temperature
                    temperature={weatherData.main.temp}
                    city={weatherData.name}
                    description={weatherData.weather[0].description}
                />
            </div>
                
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <WeatherDetails
                    humidity={weatherData.main.humidity}
                    feelsLike={weatherData.main.feels_like}
                    wind={weatherData.wind.speed}
                />
            </div>
            </>}
        </div>
    )
}

export default Weather