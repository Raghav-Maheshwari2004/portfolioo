import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import assets from '../../assets/assests';
const Navbar = () => {
   
  return (
      <div>
        <nav>
          {/* <img src={} alt="" /> */}
        <ul >
        <li> <Link to="/">Home</Link> </li>
        <li> <a href="#about">About Me</a> </li>
        <li> <a href="#skill">Skills</a> </li>
                <li> <a href={assets.resume}  download="Raghav Maheshwari Resume">Resume</a></li>
                <li> <a href="">Contact info</a></li>
                            </ul>
        </nav>
      
      </div>
      
  )
}

export default Navbar

