import Current from "./Current";
import Daily from "./Daily";

const Main = ({ currentWeather, dailyWeather, city }) => {
    return (
        <div className='container mainContainer'>
            <Current currentWeather={currentWeather} city={city} />
            <Daily dailyWeather={dailyWeather} />
        </div>
    );
};

export default Main;
