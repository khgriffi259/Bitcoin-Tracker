import React from 'react'

const Coins = (props) => {
    const {coins} = props;
    const coinList = coins ? (coins.map(coin => {
        return (
            <div>
            <li className="coin list-group-item d-flex justify-content-between" key={coin.id}>
                <span className="name">{coin.name}</span>
                <div className="price_percent-change d-flex justify-content-between">
                    <span className="price ">{"$ " + coin.quote.USD.price.toFixed(4)}</span>
                    <span className={"percent-change  " + (coin.quote.USD.percent_change_24h > 0 ? 'green' : 'red')}>{coin.quote.USD.percent_change_24h.toFixed(4) + " %"}</span>
                </div>
            </li>
            </div>
        )
        })) : (
        <div>there are no coins</div>
        )
        
        return (
        <div className="container">
        <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
            <ul className="list-group"> 
            <li className="coin list-group-item d-flex justify-content-between">
                <span className="title">Coin</span>
                <div className="price_percent-change d-flex justify-content-between">
                    <span className="title">Price</span>
                    <span className="title">Percent Change</span>
                </div>
            </li>
                {coinList}
            </ul>
        </div>    
        </div>
        </div>
        );
  

}

export default Coins;