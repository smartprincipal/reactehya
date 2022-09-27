import React, { useState } from 'react'
import './Header.css'
import Logo from '../../asset/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {

const [toggle, setToggle] = useState(false)

// const [onmouseover, setOnMouseOver] = useState(false)

const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}

// const handleMouse =() => {
//   return setOnMouseOver(prevMouse => !prevMouse)
// }



  return (
    <div>
        <header>
        {/* LOGO */}
        <div className="logo">
          <Link to='/'><img src={Logo} alt="Logo" /></Link>
        
        </div>

        <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div>

        {/* <div className='close' id="close" onclick={eventClose}>  </div> */}

        {/* NaVIGATION BAR */}
        <nav className='navBar'>
        <ul className={toggle ? 'menu-drop': 'menu'}>
        {/* // {toggle ? 'menu': 'deactive'} */}
        <li><Link to='/' className='menu-list'>Home</Link></li>
        <li><Link to='./' onclick={handleToggle} className='menu-list'>Landings &#129091;</Link>
        <ul id='sub-landing' class={toggle ? 'dropdown' : 'menu'}>
        <li><Link to='./' className='dropdown'>Landing1</Link></li>
          <li><Link to='./' className='dropdown'>Landing2</Link></li>
          <li><Link to='./' className='dropdown'>Landing3</Link></li>
          <li><Link to='./' className='dropdown'>Landing4</Link></li>
          </ul>
        </li>
        <li><Link to='./' className='menu-list'>Pages &#129091;</Link>
        <ul id='sub-pages' className='sub-pages'>
          <li><Link to='./' className='dropdown'>About Us</Link></li>
          <li><Link to='./' className='dropdown'>Contact Us</Link></li>
          <li><Link to='./' className='dropdown'>Direction</Link></li>
          <li><Link to='./' className='dropdown'>All</Link></li>
        </ul>
        </li>
        <li><Link to='./' className='menu-list'>Doc</Link></li>
        <li><Link to='/AboutUs' className='menu-list'>Contact Us</Link></li>

        <button className='btn1' type='submit'>Login</button>
    
    
        </ul>
        </nav>
        </header>
    </div>
  )
}

export default Header