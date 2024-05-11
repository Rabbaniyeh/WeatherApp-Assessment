/* eslint-disable react/prop-types */
function WeatherDetailsItem({title, value}) {
  return (
    <div className="flex flex-col items-center">
    <p className="text-2xl font-semibold text-white">{value}</p>
    <p className="text-lg text-white">{title}</p>
    </div>
  )
}

export default WeatherDetailsItem