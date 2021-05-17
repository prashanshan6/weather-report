const WeatherCard = ({ dailyWeatherinfo }) => {
    if ({ dailyWeatherinfo } === undefined) {
        return <div className='card weatherCard'>loading...</div>;
    } else {
        return (
            <div className='card weatherCard'>
                <h2>
                    {new Date(dailyWeatherinfo.dt).toLocaleString("default", {
                        weekday: "short",
                    })}
                </h2>
                <div className='weatherCardImg'>
                    <img
                        src={`http://openweathermap.org/img/wn/${dailyWeatherinfo.weather[0].icon}@2x.png`}
                        alt='weather icon'
                    />
                </div>
                <p className='minTemp'>{dailyWeatherinfo.temp.min}°C</p>
                <p>{dailyWeatherinfo.temp.max}°C</p>
            </div>
        );
    }
};

export default WeatherCard;
