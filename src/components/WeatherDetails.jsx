import WeatherDetailsItem from "./WeatherDetailsItem"

/* eslint-disable react/prop-types */
function WeatherDetails({humidity, feelsLike, wind}) {
  return (
    <div className="bg-gray-400 flex justify-around w-96 bg-opacity-20 p-4 rounded-lg shadow-lg">
        <WeatherDetailsItem 
        title={'Feels Like'}
        value={`${feelsLike}°C`}
        />
        <WeatherDetailsItem 
        title={'Humidity'}
        value={`${humidity}%`}
        />
        <WeatherDetailsItem 
        title={'Winds'}
        value={`${wind}MPH`}
        />
    </div>
  )
}

export default WeatherDetails