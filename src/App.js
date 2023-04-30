import './App.css';
import React, {useState } from 'react';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import CoinsTable from './components/CoinsTable';


function App() {


    const [search, setSearch] = useState('');
    function handleChange(event) {
        setSearch(event.target.value);
    }

  return (
      <div className="App">
          <Title name={"Crypto Currency"} />
          <SearchBar placeholder={"Search Coin"} value={handleChange} />
          <CoinsTable searchText = { search } />

       </div>
  );
}

export default App;
