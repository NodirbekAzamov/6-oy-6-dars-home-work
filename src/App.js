import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./Components/Task-1/style.scss"
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Task-2/Home";
import Login from "./Components/Task-2/Login";
import CarsTable from "./Components/Task-2/CarsTable";
import Matiz from "./Components/Task-2/cars/Car-matiz";
import Jiguli from "./Components/Task-2/cars/Jiguli";
import Spark from "./Components/Task-2/cars/Spark";
import Captiva from "./Components/Task-2/cars/Captiva";
import Malibu from "./Components/Task-2/cars/Malibu";
import Damas from "./Components/Task-2/cars/Damas";
import Nexia from "./Components/Task-2/cars/Nexia";
import Laseti from "./Components/Task-2/cars/Laseti";


import Second from "./Components/Task-1/Second";
import Third from "./Components/Task-1/Third";
import First from "./Components/Task-1/First";


export class App extends Component {

  render() {

    return <div>

      {/* task-1 */}
      <div className='d-flex g-5'>
        <div className='d-flex flex-column w-50 h-75'>
          <Link className='btn btn-primary '  to="/">Home</Link>
          <Link className='btn btn-warning my-5'  to="/blog">Blog </Link>
          <Link className='btn btn-info'  to="/contact">Contact</Link>
        </div>
        <div className="w-50 h-75">
          <Routes >
            <Route path="/" element={<First />}/>
            <Route path='/blog' element={<Second />} />
            <Route path='/contact' element={<Third />} />
          </Routes>
        </div>
      </div>



      {/* task-2 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carstable" element={<CarsTable />} />

        <Route path="/car" element={<Matiz />} />
        <Route path="/jiguli" element={<Jiguli />} />
        <Route path="/spark" element={<Spark />} />
        <Route path="/captiva" element={<Captiva />} />
        <Route path="/malibu" element={<Malibu />} />
        <Route path="/damas" element={<Damas />} />
        <Route path="/nexia" element={<Nexia />} />
        <Route path="/laseti" element={<Laseti />} />
      </Routes>


    </div>;
  }
}
