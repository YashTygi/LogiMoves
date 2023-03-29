import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {default as Logo} from '../../assets/logo.png'

const Navbar = (props) => {
  console.log(props.exporter)
  return (
    <div className='nav'>
     <div>
      <img className='logo' src={Logo} alt='logo' />
     </div>
     <ul className='nav_content'>
     <Link className='link' to='/'><li className='nav_links'>Home</li></Link>
      <Link className='link' to='/register'><li className='nav_links'>Register</li></Link>
      {props.exporter ? null : (<Link className='link' to='/godown_list'><li className='nav_links'>Godown List</li></Link>)}
      <Link className='link' to='/login'><li className='nav_links'>Login</li></Link>
     </ul>
    </div>
  )
}

export default Navbar