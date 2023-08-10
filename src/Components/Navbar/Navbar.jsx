import React from 'react'
import {  NavLink } from 'react-router-dom'
import './Navbar.css';
import logo from '../../img/Logomsr.png'
export default function Navbar() {

  return (
    <>
{/* <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

    <diyv className="container">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav ">
          <li className="nav-item ">
            <NavLink className="nav-link active" href="#header"  >الرئيسية</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about"  >
  
              تخصصاتنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#price" >الأسعار</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#location" >فروعنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://goo.gl/maps/yfQV6DrpxGjKLGrYA" >عن الأكاديمية</a>
          </li>
          <li className="nav-item">
          <a className="nav-link"><img className=' logo' src={logo} /></a>
  </li>
        </ul>

      </div>

    </div>

  </nav> */}

<nav class="navbar p-0 bg-body-tertiary">
  <div class="container-fluid">
<img className=' logo' src={logo} />
        <ul className="nav m-auto">
          <li className="nav-item ">
            <NavLink className="nav-link active" href="#header"  >الرئيسية</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#info" >عن الأكاديمية</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about"  >
  
              تخصصاتنا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#price" >مميزتنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#location" >فروعنا</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  >تسجيل الدخول</a>
          </li>
        </ul>
  </div>
</nav>
  </>

  
  )
}
