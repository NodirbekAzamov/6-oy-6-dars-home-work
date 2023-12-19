import React, { Component } from 'react'
import "./style.scss"
import laseti from "./images/lasetti.jpg"
export default class Laseti extends Component {
  render() {
    return (
      <div className='container'>
        <div className="box">
          <h1>Daewoo Lacetti</h1>
          <img src={laseti} alt="" />
          <h6>Ishlab chiqaruvchi	UzDaewooAuto (2003-2008)
            GM Uzbekistan (2008-2013)
            Eksteryer
            Oʻrindiqlar soni	5
            Eshiklar soni	4</h6>
        </div>
      </div>
    )
  }
}
