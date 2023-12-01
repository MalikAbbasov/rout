import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='nav'>
        <h2>salam</h2>
        <ul>
          {/* <li>
            <Link to={"/"}>Home</Link>
          </li> */}
          <NavLink to={"/"} className={(navData)=>( navData.isActive ? "active" :"")}>home</NavLink>
          <NavLink to={"/Contact"} className={(navData)=>( navData.isActive ? "active" :"")}>Contact</NavLink>
          <NavLink to={"/About"} className={(navData)=>( navData.isActive ? "active" :"")}>about</NavLink>
          {/* <li>
            <Link to={"/Contact"} >Contact</Link>
          </li> */}
          {/* <li>
            <Link to={"/About"}>About</Link>
          </li> */}
        </ul>
    </div>
  )
}

export default Navbar