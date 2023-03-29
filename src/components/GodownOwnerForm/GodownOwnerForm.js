import { useState, useEffect } from "react";

import "./GodownOwnerForm.css";


function GodownOwnerForm() {
  const initialValues = { username: "", email: "", Address: "", Number: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const postData = async(e) => {
    e.preventDefault();
    const{name, email, address, Number} = initialValues;

    const res = await fetch("https://warehousedb-74728-default-rtdb.firebaseio.com/warehouse.json", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        address, 
      })
    })
  }

  return (
    <div className="container">
      

      <form onSubmit={handleSubmit}>
        <h1>Warehouse Owner Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Office Address</label>
            <input
              type="Address"
              name="address"
              placeholder="Address"
              value={formValues.Address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Address}</p>
          
          <p>{formErrors.Number}</p>
          <div className="field pdf">
            <label>Proof Of Identity</label>
            <input
              type="file"
              accept="pdf"
              name="proofOfId"
              placeholder="Proof Of Identity"
              value={formValues.ownership}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field pdf">
            <label>Warehouse License</label>
            <input
              type="file"
              accept="pdf"
              name="warehouseId"
              placeholder="Proof Of OwnerShip"
              value={formValues.license}
              onChange={handleChange}
              required
            />
          </div>
          
          <button onClick={postData} className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GodownOwnerForm;


// import React from 'react'
// import { useState } from 'react'
// import {database} from '../../Firebase.js'
// function FirebaseDemo() {

//     const [details, setDetails] = useState({
//         name: '',
//         address: '',
//         email: '',
       
//     })

//     const PostData =async(e)=>{
//         e.preventDefault()

//         const{name,address,email}=details;

//        const res=await fetch("https://warehousedb-74728-default-rtdb.firebaseio.com/warehouse.json",
//        {
//            method:'POST',
//            headers:{
//                'Content-Type':'application/json'
//            },
//            body:JSON.stringify({
//             name,
//             address,
//             email,
           
//            })
//         })

//     }

//   return (
//     <div className='form' >
//         <input type='text' placeholder='Enter your first name' onChange={(e)=>
//             setDetails({...details,fName:e.target.value})} />
//         <input type='text' placeholder='Enter your last name' onChange={(e)=>
//             setDetails({...details,lName:e.target.value})}  />
//         <input type='email' placeholder='Enter your Email address' onChange={(e)=>
//             setDetails({...details,email:e.target.value})} />
//         <button onClick={PostData}>Submit</button>
//     </div>
//   )
// }

// export default FirebaseDemo


