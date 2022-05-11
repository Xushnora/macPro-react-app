import React, { Component } from "react";
import './price.css'

class PriceBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            total: 15066000,
            subtotal: 17627500,
            ramSize8: 12000000,
            ramSize16: 16000000
        }
    }

    macObj = {
        name: "Mac Book Air 13-inch",
        ram: [
          {
            name: `M1/8/256 Gold`,
            ramSize: 8,
            active: true,
            memory: [
              {
                name: `M1/8/256 Gold`,
                active: true,
                size: 256,
                price: 12000000,
              },
              {
                name: `M1/8/512 Gold`,
                active: false,
                size: 512,
                price: 15000000,
              },
            ],
          },
          {
            name: `M1/16/256 Gold`,
            ramSize: 16,
            active: false,
            memory: [
              {
                name: `M1/16/256 Gold`,
                active: true,
                size: 256,
                price: 17000000,
              },
              {
                name: `M1/16/512 Gold`,
                active: false,
                size: 512,
                price: 20000000,
              },
              {
                name: `M1/16/1TB Gold`,
                active: false,
                size: 1024,
                price: 21000000,
              },
            ],
          },
        ],
        colors: [
          {
            name: "Gold",
            color: '.yellow',
            imgUrl: "imgs/macbookAir.webp",
            imgSlider: ["imgs/macbookAir.webp", "imgs/macPink2.jpg", "imgs/macPink3.jpg", "imgs/macPink4.jpg", "imgs/macPink5.jpg"]
          },
          {
            name: "Silver",
            color: '.gray',
            imgUrl: "imgs/macSilver1.jpg",
            imgSlider: ["imgs/macSilver1.jpg", "imgs/macSilver2.jpg", "imgs/macSilver3.jpg", "imgs/macSilver4.jpg", "imgs/macSilver5.jpg"]
          },
          {
            name: "Space Gray",
            color: '.lightGray ',
            imgUrl:  "imgs/macGrey1.jpg",
            imgSlider: ["imgs/macGrey1.jpg", "imgs/macGrey2.jpg", "imgs/macGrey3.jpg", "imgs/macGrey4.jpg", "imgs/macGrey5.jpg"],
          },
        ],
        gold: [
          "imgs/macbookAir.webp",
          "imgs/macPink2.jpg", 
          "imgs/macPink3.jpg",
          "imgs/macPink4.jpg",
          "imgs/macPink5.jpg"
        ],
        silver: [
          "imgs/macSilver1.jpg", 
          "imgs/macSilver2.jpg", 
          "imgs/macSilver3.jpg", 
          "imgs/macSilver4.jpg", 
          "imgs/macSilver5.jpg"
        ],
        grey: [
          "imgs/macGrey1.jpg",
          "imgs/macGrey2.jpg", 
          "imgs/macGrey3.jpg", 
          "imgs/macGrey4.jpg", 
          "imgs/macGrey5.jpg"
        ]
      };

    handlePlus = () => {
        this.setState({count: this.state.count + 1})
        this.setState({total: this.state.count * this.state.total})
        this.setState({subtotal: this.state.count * this.state.subtotal})
    }

    handleMinus = () => {
        this.setState({count: this.state.count - 1})
        this.setState({total: this.state.total / this.state.count})
        this.setState({subtotal: this.state.subtotal / this.state.count})
    }

    render() {
        return (
                <div className="rightBox col-6">
                    <div className="inScrolling">
                        <h1 className="mac__title">MacBook Air 13-inch</h1>
                        <div className="macNameBox">
                            <h2 className="macName">M1/8/256 Gold</h2>
                        </div>
                        <div className="ram">
                            <h4 className="ram__title">Ram</h4>
                            <div className="listBtn">
                                <button className="ramBtn activeRam buttonFocus">8GB</button>
                                <button className="ramBtn buttonFocus">16GB</button>
                            </div>
                        </div>
                        <div className="xotira">
                            <h4 className="ram__title">Xotira hajmi</h4>
                            <div className="listMemory">
                                <button  className="memoryBtn activeRam buttonFocus">256GB</button>
                                <button className="memoryBtn buttonFocus">512GB</button>
                                <button className="memoryBtn buttonFocus">1TB</button>
                            </div>
                        </div>
                        <div className="color">
                            <h4 className="color__title">Ranglar</h4>
                            <div className="colorBtnBox">
                                <button className="goldBtn color-btn borderActive buttonFocus"> 
                                    <span className="yellow"></span>
                                    <p className="color-name">Tilla rang</p>
                                </button>
                                <button className="grayBtn color-btn buttonFocus">
                                    <span className="gray"></span>
                                    <p className="color-name">Kumush rang</p>
                                </button>
                                <button className="lightGrayBtn color-btn buttonFocus">
                                    <span className="lightGray"></span>
                                    <p className="color-name"> Kosmik kulrang</p>
                                </button>
                            </div>
                        </div>
                        <div className="addBox">
                            <div className="add-btn-box">
                                <button onClick={this.handleMinus} className="minusBtn remov">
                                    <i className='bx bx-minus'></i>
                                </button>
                                <span className="numberInput">{this.state.count}</span>
                                <button onClick={this.handlePlus} className="plusBtn add">
                                    <i className='bx bx-plus'></i>
                                </button>
                            </div>
                        </div>
                        <div className="price">
                            <h3 id="priceId" className="price-title">{this.state.total} so'm</h3>
                            <p className="price-text">17 627 500 so'm</p>
                        </div>
                        <button className="add-basket-btn">Savatchaga qo'shish</button>
                        <button className="combars-btn">Taqqoslash</button>
                    </div>
                </div>
        ) 
    }
}

export default PriceBox;

