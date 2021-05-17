import Search from "./Search";
const Header = ({ onSearch }) => {
    return (
        <header>
            <h2>Weather Report</h2>
            <Search onSearch={onSearch} />
        </header>
    );
};

export default Header;
