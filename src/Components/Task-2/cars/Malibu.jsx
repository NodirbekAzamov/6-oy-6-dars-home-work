import React, { Component } from 'react'
import "./style.scss"
import malibu from "./images/Malibu.jpg"
export default class Malibu extends Component {
  render() {
    return (
      <div className='container'>
        <div className="box">
          <h1>Chevrolet Malibu</h1>
          <img src={malibu} alt="" />
          <h6>
            Ishlab chiqaruvchi	AQSH bayrogʻi AQSh: GM Fairfax Assembly, Kansas City, Kansas
            Xitoy bayrogʻi Xitoy  : Shanghai, China (SAIC-GM)
            Janubiy Koreya bayrogʻi Koreya Respublikasi: Bupyeong, South Korea (GM Korea)
            Oʻzbekiston bayrogʻi Oʻzbekiston: Tashkent (GM Uzbekistan)
            Model yili	2016
          </h6>
          <h6>Gʻildirak bazasi	111.4 in (2,830 mm)
            Uzunligi	193.8 in (4,923 mm)
            Kengligi	73.0 in (1,854 mm)
            Balandligi	57.7 in (1,466 mm)
            Vazni	3,086–3,457 lb (1,400–1,568 kg)[1]</h6>
        </div>
      </div>
    )
  }
}
