/* eslint-disable react/prop-types */
function Temperature({temperature, city, description}) {
  return (
    <div className="flex flex-col">
        <p className="text-xl text-white">{city}</p>
        <p className="text-5xl font-extrabold text-white">{temperature}°C</p>
        <p className="text-lg text-white capitalize">{description}</p>
    </div>
  )
}

export default Temperature