import React from "react";
import "./hero.css"
import PriceBox from "./price";
import Slider from "./slider";

function Hero() {
    return (
        <div className="container">
            <div className="parents">
                <Slider />
                <PriceBox />
            </div>
            
        </div>
    )
}

export default Hero;