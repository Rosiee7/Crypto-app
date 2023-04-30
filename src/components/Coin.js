import '../App.css';
import React from 'react'


function Coin({ name, image, symbol, price, priceChange, volume, marketCap, marketCapRank}) {
    return (
           
        <tr className="coinRow">

            <td data-label="Coin">
                <div className="Coin">
                    <img src={image} alt="cryptoCoin" class="coinImage"></img>
                    <h4 className="coinName">{name}</h4>
                    <span className="coinSymbol">{symbol.toUpperCase()} </span>
                    </div>
            </td>
            <td data-label="Market Cap Rank">{marketCapRank}</td>

                
                <td data-label="Price">${price.toLocaleString()}</td>
                {
                    (priceChange < 0) ?
                    (<td data-label="Price Change Percentage" className="percentRed">{priceChange}%</td>) :
                    (<td data-label="Price Change Percentage" className="percentGreen">{priceChange}%</td>)
                }
                <td data-label="Market Cap">${marketCap.toLocaleString()}</td>
                <td data-label="Volume">${volume.toLocaleString()}</td>
            </tr>

    )
}

export default Coin;