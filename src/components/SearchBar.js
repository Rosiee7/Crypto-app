import '../App.css';


function SearchBar({ placeholder , value}) {
    return (
        <div className="search-container">
            <form className="searchForm" action="/action_page.php">
                <input className="searchInput" type="text" placeholder={placeholder} name="search" onChange={value} />
            </form>
        </div>
     
    );
}

export default SearchBar;