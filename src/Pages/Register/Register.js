import React, {useState} from 'react'
import './Register.css'
import {default as Exporter} from '../../assets/exporter.jpg'
import {default as Owner} from '../../assets/owner.jpg'
import {ExporterForm, GodownOwnerForm, Navbar} from '../../components'
import { Link } from 'react-router-dom'

const Register = () => {
  const[exporter, setExporter] = useState(true);
  const handleClickExp = () => {
    setExporter(false);
  }
  const handleClickWh = () => {
    setExporter(true);
  }
  return (
    <React.Fragment>
     <Navbar exporter={exporter} />
     <div className='register'>
      <div className='exporter'>
      <button className='register_btn' onClick={handleClickExp}>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to='/exporter_form'>
      Register As Exporter
      </Link>
      </button>
      </div>
      <div className='warehouse_owner'>
      <button className='register_btn' onClick={handleClickWh}>
      <Link style={{ textDecoration: 'none', color: '#fff' }} to='/warehouse_owner_form'>
      Register As Warehouse Owner
      </Link>
      </button>
      </div>
     </div>
    </React.Fragment>
  )
}

export default Register