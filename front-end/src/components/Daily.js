import WeatherCard from "./WeatherCard";

const Daily = ({ dailyWeather }) => {
    return (
        <div className='container dailyContainer'>
            {dailyWeather.map((dailyWeatherinfo, ind) => {
                return <WeatherCard dailyWeatherinfo={dailyWeatherinfo} />;
            })}
        </div>
    );
};

export default Daily;
