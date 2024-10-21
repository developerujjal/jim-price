import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";
import './PriceOptions.css'

const PriceOptons = () => {

    const [prices, setPrices] = useState([])

    useEffect(() => {
        fetch('./jimData.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])


    return (
        <div>
            <div className="container">
                <h2 className="heading-con">Our All Prices</h2>
                <div className="prices-box-wrapper">
                    {
                        prices.map((price) => <PriceOption price={price} key={price.id}></PriceOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PriceOptons;