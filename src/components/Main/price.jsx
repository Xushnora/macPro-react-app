import React, { Component } from "react";
import './price.css'

class PriceBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          allDefault: {
            count: 1,
            total: 12066000,
            subtotal: 13007500,
            ramSize: 8,
            memorySize: 256,
            color1: "Gold",
            color2: "Silver",
            color3: "Gray"
          }
        }
    }

    btnHandle1 = () => {
      console.log('ok');
      this.setState({
        allDefault: {
            count: 1,
            total: 12000000,
            subtotal: 13600500,
            ramSize: 8,
            memorySize: 256,
            color1: "Gold"
        }
      })
    }

    btnHandle2 = () => {
      this.setState({
        allDefault: {
            count: 1,
            total: 15066000,
            subtotal: 17627500,
            ramSize: 16,
            memorySize: 256,
            color1: "Gold"
        }
      })
    }

    btnHandle3 = () => {
      this.setState({
        allDefault: {
            count: 1,
            total: 14066000,
            subtotal: 18627500,
            ramSize: 8,
            memorySize: 512,
            color1: "Gold"
        }
      })
    }

    btnHandle4 = () => {
      this.setState({
        allDefault: {
            count: 1,
            total: 16866000,
            subtotal: 19627500,
            ramSize: 8,
            memorySize: 256,
            color1: "Gold"
        }
      })
    }

    btnHandle5 = () => {
      this.setState({
        allDefault: {
            count: 1,
            total: 21512000,
            subtotal: 25169000,
            ramSize: 16,
            memorySize: 1024,
            color1: "Gold"
        }
      })
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

    handlePlus1 = () => {
          this.setState({count: this.state.allDefault.count + 1})
          this.setState({total: this.state.allDefault.total + 12000000})
          this.setState({subtotal: this.state.allDefault.subtotal + 13000000})
    }

    handleMinus1 = () => {
      if(this.state.count <= 1) {
        return
      } else {
        this.setState({count: this.state.allDefault.count - 1})
        this.setState({total: this.state.allDefault.total - 12000000})
        this.setState({subtotal: this.state.allDefault.subtotal - 13000000})
      }
    }

    render() {
        return (
                <div className="rightBox col-6">
                    <div className="inScrolling">
                        <h1 className="mac__title">MacBook Air 13-inch</h1>
                        <div className="macNameBox">
                            <h2 className="macName">M1/{this.state.allDefault.ramSize}/{this.state.allDefault.memorySize} {this.state.allDefault.color1}</h2>
                        </div>
                        <div className="ram">
                            <h4 className="ram__title">Ram</h4>
                            <div className="listBtn">
                                <button className="ramBtn activeRam buttonFocus" onClick={this.btnHandle1}>8GB</button>
                                <button className="ramBtn buttonFocus" onClick={this.btnHandle2}>16GB</button>
                            </div>
                        </div>
                        <div className="xotira">
                            <h4 className="ram__title">Xotira hajmi</h4>
                            <div className="listMemory">
                                <button  className="memoryBtn activeRam buttonFocus" onClick={this.btnHandle4}>256GB</button>
                                <button className="memoryBtn buttonFocus" onClick={this.btnHandle3}>512GB</button>
                                <button className="memoryBtn buttonFocus" onClick={this.btnHandle5}>1TB</button>
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
                                <button onClick={this.handleMinus1} className="minusBtn remov">
                                    <i className='bx bx-minus'></i>
                                </button>
                                <span className="numberInput">{this.state.allDefault.count}</span>
                                <button onClick={this.handlePlus1} className="plusBtn add">
                                    <i className='bx bx-plus'></i>
                                </button>
                            </div>
                        </div>
                        <div className="price">
                            <h3 id="priceId" className="price-title">{this.state.allDefault.total} so'm</h3>
                            <p className="price-text">{this.state.allDefault.subtotal} so'm</p>
                        </div>
                        <button className="add-basket-btn">Savatchaga qo'shish</button>
                        <button className="combars-btn">Taqqoslash</button>
                    </div>
                </div>
        ) 
    }
}

export default PriceBox;

