import React, { Component } from 'react'
import "./style.scss"
import captiva from "./images/Captiva.jpg"
export default class Captiva extends Component {
  render() {
    return (
      <div className='container'>
        <div className="box">
          <h1>Chevrolet Captiva</h1>
          <img src={captiva} alt="" />
          <h6>Ishlab chiqaruvchi	GM Uzbekistan
            Avvalgi modeli	Chevrolet Tahoe
            Keyingi modeli	Chevrolet Tracker
            Kuch moslamalari
            Transmissiyasi	mexanik
            avtomat
            Quvvati	249 ot kuchi
            Eksteryer
            Oʻrindiqlar soni	8
            Eshiklar soni	5</h6>
        </div>
      </div>
    )
  }
}
