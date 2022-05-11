import React from "react";
import './slider.css'

// IMAGES
import macImg from '../../components/asset/imgs/macbookAir.webp'
import macImg1 from '../../components/asset/imgs/macbookAir.webp'
import macPinkImg2 from '../../components/asset/imgs/macPink2.jpg'
import macPinkImg3 from '../../components/asset/imgs/macPink3.jpg'
import macPinkImg4 from '../../components/asset/imgs/macPink4.jpg'
import macPinkImg5 from '../../components/asset/imgs/macPink5.jpg'

function Slider() {
    return (
                <div className="leftBox col-6">
                    <div>
                        <div className="macBox">
                            <ul className="macImgList">
                                <li className="macImgItem">
                                    <img className="macImg" src={macImg} />
                                </li>
                            </ul>
                        </div>
                        <div className="desc-modalBox">
                            <button className="decs-modal">
                                <i className='bx bx-fullscreen'></i>
                            </button>
                        </div>
                        <div className="slider-img">
                            <ul className="slider-list">
                                <li className="slider-item active-item">
                                    <img src={macImg1} />
                                </li> 
                                <li className="slider-item">
                                    <img src={macPinkImg2} />
                                </li>
                                <li className="slider-item">
                                    <img src={macPinkImg3} />
                                </li>
                                <li className="slider-item">
                                    <img src={macPinkImg4} />
                                </li>
                                <li className="slider-item">
                                    <img src={macPinkImg5} />
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default Slider;