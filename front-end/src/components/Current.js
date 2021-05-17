const Current = ({ currentWeather, city }) => {
    return (
        <div className='container currentContainer'>
            <div className='currentLeft'>
                <h2>{city.toUpperCase()}</h2>
                <h3>WEATHER</h3>
            </div>

            <img
                src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                alt=''
            />

            <div className='currentRight'>
                <h1>{currentWeather.temp}°C</h1>
                <h3>{currentWeather.weather[0].description.toUpperCase()}</h3>
            </div>
        </div>
    );
};

export default Current;
