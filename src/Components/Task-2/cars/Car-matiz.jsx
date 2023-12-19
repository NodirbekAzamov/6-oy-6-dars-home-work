import React, { Component } from 'react'
import "./style.scss"
import Matiz_img from "./images/Matiz.jpg"
export default class Matiz extends Component {
  render() {
    return (
      <div className=' container'>
        <div className="matiz_box">
        <h1>Matiz</h1>
        <img src={Matiz_img} alt="" />
        <p>Daewoo Matiz</p>
        <div className='matiz_text'>
          <h6>Ishlab chiqaruvchi</h6>
          <h6>UzDaewoo</h6>
        </div>

        <div className='matiz_text'>
          <h6>Yil</h6>
          <h6>	1998 dan buyon</h6>
        </div>

        <div className='matiz_text'>
          <h6>Ishlab chiqarilgan joy</h6>
          <h6>	Asaka</h6>
        </div>

        <div className='matiz_text'>
          <h6>Yoqilg'i turi	</h6>
          <h6>Benzin</h6>
        </div>

        <div className="matiz_text">
          <h6>Sinfi	</h6>
          <h6>mini</h6>
        </div>

        <div className="matiz_text">
          <h6>O'rindiq	</h6>
          <h6>5</h6>
        </div>

        <div className="matiz_text">
          <h6>Motor	</h6>
          <h6>	0.8 l va 1.0 l</h6>
        </div>

        <div className="matiz_text">
          <h6>Quvvat	</h6>
          <h6>	38 va 47 kW</h6>
        </div>

        <div className="matiz_text">
          <h6>Uzatma		</h6>
          <h6>Mexanik</h6>
        </div>

        <div className="matiz_text">
          <h6>Soni	</h6>
          <h6>5</h6>
        </div>
        </div>
      </div>
    )
  }
}
