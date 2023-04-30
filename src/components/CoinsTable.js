import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';


function CoinsTable({ searchText }) {

    const [coins, setCoins] = useState([]);
    const [order, setOrder] = useState("ascending");
    const [arrow, setArrow] = useState("\u25B4");
    const [isHovering, setIsHovering] = useState(false);




    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1 & sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            }).catch(err => console.log(err))
    }, []);

    
    const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()));

    function changeTableOrder(orderBy){

        if (order === "ascending") {
            const sorted = coins.sort((x, y) => y[orderBy] - x[orderBy]);
            setCoins(coins.slice(sorted));
            setOrder("descending");
            setArrow("\u25BE");

        }

        if (order === "descending") {
            const sorted = coins.sort((x, y) => x[orderBy] - y[orderBy]);
            setCoins(coins.slice(sorted));
            setOrder("ascending");
            setArrow("\u25B4");

        }
       
    }


    const handleMouseOver = (orderBy) => {
        setIsHovering(orderBy);
    };

    const handleMouseOut = () => {
        setIsHovering("");
    };

    return (
                <table id="coinsTable">
            <tr>
                <th onClick={() => changeTableOrder("market_cap_rank")} onMouseOver={() => handleMouseOver("coin")} onMouseOut={() => handleMouseOut()}>Coin{isHovering === "coin" ? arrow : null}</th>
                <th onClick={() => changeTableOrder("market_cap_rank")} onMouseOver={() => handleMouseOver("market_cap_rank")} onMouseOut={() => handleMouseOut()}>Market Cap Rank{isHovering === "market_cap_rank" ? arrow : null}</th>

                <th onClick={() => changeTableOrder("current_price")} onMouseOver={() => handleMouseOver("current_price")} onMouseOut={() => handleMouseOut()} >Price{isHovering === "current_price" ? arrow : null}</th>
                <th onClick={() => changeTableOrder("price_change_percentage_24h")} onMouseOver={() => handleMouseOver("price_change_percentage_24h")} onMouseOut={() => handleMouseOut()}>Price Change Percentage{isHovering === "price_change_percentage_24h" ? arrow : null}</th>
                <th onClick={() => changeTableOrder("market_cap")} onMouseOver={() => handleMouseOver("market_cap")} onMouseOut={() => handleMouseOut()}>Market Cap{isHovering === "market_cap" ? arrow : null}</th>
                <th onClick={() => changeTableOrder("total_volume")} onMouseOver={() => handleMouseOver("total_volume")} onMouseOut={() => handleMouseOut()}>Volume{isHovering === "total_volume" ? arrow : null}</th>
                    </tr>
            {filterCoins.map(coin => {
                        return <Coin
                            key={coin.id}
                            symbol={coin.symbol}
                            name={coin.name}
                            image={coin.image}
                            volume={coin.total_volume}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap}
                            marketCapRank={coin.market_cap_rank}
                        />
                    })}

                </table>
    );
}


export default CoinsTable;
