import { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
    const [cityList, setcityList] = useState([]);
    const [cityValue, setcityValue] = useState("");
    const [searchDisabled, setsearchDisabled] = useState(true);
    useEffect(() => {
        let url = `http://localhost:5555/api/weather/citylist/${cityValue}`;
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    setcityList(result);
                    if (cityList.length > 0) {
                        let e = cityList.filter((obj) => {
                            return obj.city === cityValue;
                        });
                        let empty = Object.keys(e).length === 0;
                        setsearchDisabled(empty);
                    } else {
                        setsearchDisabled(true);
                    }
                },
                (error) => {
                    setcityList([]);
                    // console.log(error);
                }
            );
    }, [cityValue, cityList]);
    return (
        <div className='container searchContainer'>
            <input
                type='text'
                list='cityOptions'
                name='cityName'
                id='cityName'
                onChange={(e) => {
                    setcityValue(e.target.value);
                }}
                placeholder='Search by city'
            />
            <datalist id='cityOptions'>
                {cityList.map((val, ind) => {
                    return <option key={ind} value={val.city}></option>;
                })}
            </datalist>

            <button
                className='searchBtn disabled'
                disabled={searchDisabled}
                onClick={() => {
                    onSearch(cityList[0]);
                }}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
