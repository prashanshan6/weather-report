import Header from "./components/header";
import "./App.css";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import homeImg from "./img/storm.svg";

function App() {
    const [cityWeather, setcityWeather] = useState({});
    const [cityInfo, setcityInfo] = useState({});
    const [isLoading, setisLoading] = useState(true);

    function handleSearch(city) {
        setcityInfo(city);
    }
    useEffect(() => {
        if ("coord" in cityInfo) {
            let url = `http://localhost:5555/api/weather/location/${cityInfo.coord.lat}/${cityInfo.coord.lon}`;
            fetch(url)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setcityWeather(result);
                        setisLoading(false);
                    },
                    (error) => {
                        setcityWeather([]);
                        // console.log(error);
                    }
                );
        }
    }, [cityInfo]);

    if (isLoading) {
        return (
            <div className='App'>
                <Header onSearch={handleSearch} />
                <h1>Find the Weather in your city</h1>
                <div className='homeImg'>
                    <img src={homeImg} alt='not found' height='300px' />
                </div>
            </div>
        );
    } else {
        return (
            <div className='App'>
                <Header onSearch={handleSearch} />
                <Main
                    currentWeather={cityWeather.current}
                    dailyWeather={cityWeather.daily}
                    city={cityInfo.city}
                />
            </div>
        );
    }
}

export default App;
