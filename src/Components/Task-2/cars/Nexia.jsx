import React, { Component } from 'react'
import "./style.scss"
import nexia from  "./images/nexia.jpg"
export default class Nexia extends Component {
  render() {
    return (
      <div className='container'>
        <div className="box">
          <h1>Nexia</h1>
          <img src={nexia} alt="" />
          <h6>
            Menimcha, 2022 yilining oxiriga qadar, Daewoo Nexia 2-nomli avtomobil o'zbek avtomobil sanoatining bir qismi bo'lib,
             eski Daewoo Nexia modelining yangi versiyasi hisoblanadi. Bu avtomobil ko'p yillar davomida o'zining qamrab olgan
              dizayni, qulayliklari va tezligi bilan taniladi.</h6>

          
        </div>
      </div>
    )
  }
}
