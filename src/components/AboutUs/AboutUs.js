import React from 'react'
import './About.css'
import {default as warehouse} from '../../assets/warehouse.png'
import {default as warehouse1} from '../../assets/warehouse1.png'
import {default as truck2} from '../../assets/truck2.png'


const AboutUs = () => {
  return (
    <div className='about_container'>
    <div className="about_img">
    <div className="top">
    <img src={warehouse} alt="Image 1" />
  </div>
  <div className="middle">
    <img src={warehouse1} alt="Image 2" />
  </div>
  <div className="bottom">
    <img src={truck2} alt="Image 3" />
  </div>
    </div>
    <div className='about_content'>
    <h1>About Us</h1>
      <p>Our platform is designed to make the process of exporting goods as smooth and effortless as possible. We understand that logistics can be a complex and time-consuming process, and that's why we have created a one-stop solution to simplify the entire process.
      <br />
      We work only with vetted warehouse owners who meet our quality and safety standards, so you can have peace of mind knowing that your goods are in good hands. Our platform provides exporters with the flexibility to choose the warehouse that suits their product features, and the convenience of managing their inventory and tracking their shipments all in one place.
      <br/>
      So if you are looking for a reliable and efficient logistics platform that can help you manage your shipments, inventory, and warehouse needs all in one place, look no further. Sign up with us today and experience the ease and convenience of our platform.</p>
     </div>
    </div>
  )
}

export default AboutUs