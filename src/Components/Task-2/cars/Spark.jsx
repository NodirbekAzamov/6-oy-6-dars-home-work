import React, { Component } from 'react'
import "./style.scss"
import spark from "./images/spark.jpg"

export default class Spark extends Component {
  render() {
    return (
      <div className='container'>
        <div className="spark">
          <h1>Chevrolet Spark</h1>
          <img src={ spark} alt="" />
          <h6>shlab chiqaruvchi	Daewoo Motors (1998–2002)
            GM Daewoo (2002–2011)
            GM Korea (2011–yildan)
            Chevrolet, GM Uzbekistan
            Asaka, Andijon viloyati, Oʻzbekiston bayrogʻi Oʻzbekiston
            Boshqa nomlari	M300
            Model yili	2010
            Avvalgi modeli	Daewoo Matiz</h6>
        </div>
      </div>
    )
  }
}
