import React, { Component } from 'react'
import "./style.scss"
import dams from "./images/Damas.jpg"
export default class Damas extends Component {
  render() {
    return (
      <div className='container'>
        <div className="box">
          <h1>Daewoo Damas & Daewoo Labo</h1>
          <img src={dams} alt="" />
          <h6>Ishlab chiqaruvchi	Daewoo (General Motors) (1992-2011)
            GM Korea (2011-yildan), Changwon, Janubiy Koreya
            Pitnak, Oʻzbekiston (GM Uzbekistan)
            Model yili	1991-2020
            Kuch moslamalari
            Dvigateli	I3
            Eksteryer
            Eshiklar soni	4-eshikli ven
            2-eshikli pikap
            Boshqa maʼlumotlar
            Aloqador avtomobillar	«Suzuki Carry»/«Every» (VIII),
            Daewoo Attivo,
            Chevrolet CMP/CMV</h6>
        </div>
      </div>
    )
  }
}
