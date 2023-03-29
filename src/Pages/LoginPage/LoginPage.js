import React from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom'
import {Blob} from '../../assets'

const LoginPage = () => {
  return (
    <div>
    <Link className='Return' to="/">Back to Home Page</Link>
    <Blob className="blob" />
    <div className='sign-in-container'>
    <form className='form'>
    <div className='sign-in-form'>
    <h1>Sign In</h1>
      <div className='sign-in-input'>
       <input 
        type="email"
        name="email"
        placeholder="Email"
        required
       />
      </div>
      <div className='sign-in-input'>
       <input 
        type="password"
        name="password"
        placeholder="Password"
        required
       />
      </div>
      <button className='sign-in-button' >Submit</button>
     </div>
    </form>
    </div>
    </div>
  )
}

export default LoginPage