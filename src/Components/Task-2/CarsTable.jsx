import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class CarsTable extends Component {


  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Cars Table</h1>
        <div className="boxs">

          <Link to="/car">
            <button onClick={() => this.matiz}>Matiz</button>
          </Link>
          <Link to="/jiguli">
            <button onClick={()=> this.jiguli}>Jiguli</button>
          </Link>

          <Link to="/spark">
            <button onClick={() => this.spark}>Spark</button>
          </Link>
          <Link to="/captiva">
            <button onClick={()=> this.captiva}>Captiva</button>
          </Link>
          <Link to="/malibu">
            <button onClick={() => this.malibu}>Malibu</button>
          </Link>
          <Link to="/damas">
            <button onClick={()=> this.damas}>Damas</button>
          </Link>
          <Link to="/nexia">
            <button onClick={() => this.nexia}>Nexia</button>
          </Link>
          <Link to="/laseti">
            <button onClick={()=> this.laseti}>Laseti</button>
          </Link>
        </div>


        {/* <button className='btn btn-info'>
          <Link to="/cars"> Cars </Link>
        </button> */}
      </div>
    )
  }
}

