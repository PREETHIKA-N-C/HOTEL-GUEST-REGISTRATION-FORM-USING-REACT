import './App.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function Form(){
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddressLine2: "",
    city:"",
    state: "",
    zipCode: "",
    email: "",
    checkindate:"",
    checkoutdate:"",
    mobilenumber:"",
    guestCount: "",
    roomType: "",
    wifi: "",
    shuttleService: "",
    notes: ""
  });
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Registered Successfully!!')
    console.log(formData);
  };
  
 const formHandler = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
 }

 return (
   <div className="formContainer">
      <form onSubmit={submitHandler}>
        <div className="Title">
        <h1>HOTEL GUEST REGISTRATION FORM</h1>
          </div>
          <div>
          <div className="label"><label >Name</label></div>
             <div >
               <input className="FName"
                       value={formData.firstName}
                       onChange={formHandler}
                       type="text"
                       name="firstName"
                       placeholder="First Name"
                       required
                     />
                   <input className="LName"
                       value={formData.lastName}
                       onChange={formHandler}
                       type="text"
                       name="lastName"
                       placeholder="Last Name"
                       required
                     />
                   </div>
                   </div>
                   
                   <div className="label"><label>Address</label></div>
                   <div>
                   <input className="Address"
                       value={formData.streetAddress}
                       onChange={formHandler}
                       type="text"
                       name="streetAddress"
                       placeholder="Street Address"
                       required
                     />
                   </div>
                   <div>
                   <input className="Address"
                       value={formData.streetAddressLine2}
                       onChange={formHandler}
                       type="text"
                       name="streetAddressLine2"
                       placeholder="Street Address Line 2"
                     />
                   </div>
                   <div>
                   <input className="city"
                       value={formData.city}
                       onChange={formHandler}
                       type="text"
                       name="city"
                       placeholder="City"
                       required
                     />
                     <input className="city"
                       value={formData.state}
                       onChange={formHandler}
                       type="text"
                       name="state"
                       placeholder="State"
                       required
                     />
                     <input className="zipcode"
                       value={formData.zipCode}
                       onChange={formHandler}
                       type="text"
                       name="zipCode"
                       placeholder="Zip Code"
                       required
                     />
                   </div>
                   
                   
                   <div className="label"><label>Email</label></div>
                <div >
                 <input className="Address"
                    value={formData.email}
                    onChange={formHandler}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="label"><label>Mobile Number</label></div>
                <div>
                
                 <input className="Address"
                    value={formData.mobilenumber}
                    onChange={formHandler}
                    type="Number"
                    name="mobilenumber"
                    placeholder="+91 8248365519"
                    required
                  />
                </div>
               
                <div className="Title">
        <h2>BOOKING INFORMATION</h2>
          </div>
          <div>
          <div className="label"><label>Check-in Date</label></div>
                    <input className="Address"
                    type="date" 
                    name="checkindate" 
                    value={formData.checkindate} 
                    onChange={formHandler}  
                    required/>
                  <div className="label"><label>Check-out Date</label></div>
                    <input className="Address"
                    type="date" 
                    name="checkoutdate"
                    value={formData.checkoutdate} 
                    onChange={formHandler} 
                    required/>
                </div>
               
                <div className="label"><label>Number of Guests in Room</label></div>
                <div>
                
                 <input className="Address"
                    value={formData.guestCount}
                    onChange={formHandler}
                    type="Number"
                    name="guestCount"
                    placeholder="Guest Count"
                    required
                  />
                </div> 
                <div className="label">
                  <select className="Address"
                    name="roomType"
                    value={formData.roomType}
                    onChange={formHandler}
                    required
                  >
                    <option>Select a Room Type</option>
                    <option value="Single $100">Single $100</option>
                    <option value="Double $150">Double $150</option>
                    <option value="Queen $200">Queen $200</option>
                    <option value="King $250">King $250</option>
                    <option value="2-Bedroom $350">2-Bedroom $350</option>
                    <option value="Suite $500">Suite $500</option>
                  </select>
                  </div>
                
                <div>
                <div className="labelOp"><label>Lease Pocket Wifi $5</label></div>
                <div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op1"
                    
                  />
                  <label className="option" for="op1">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="wifi"
                    id="op2"
                  />
                  <label className="option" for="op2">No</label>
                  </div>
               
                </div>
                </div>
                <div>
                  <div className="labelOp"><label>Free Shuttle Service</label></div>
                
                  <div>
                  <input
                    value="Yes"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op11"
                  />
                  <label className="option" for="op11">Yes</label>
                  </div>
                  <div>
                  <input
                    value="No"
                    onChange={formHandler}
                    type="radio"
                    name="shuttleService"
                    id="op12"
                  />
                  <label className="option" for="op12">No</label>
                  </div>
               
                </div>
                <div >
                  <div className="label">
        <label>Notes/Special requirements</label></div>
        <textarea className="txtArea"
         rows="10" 
          value={formData.notes}
          onChange={formHandler}
          name= "notes"
        
        />
      </div >
      <div className="infoTxt">
          <p>The submission of this form makes a reservation for the type of room selected in the form. Any changes prior the scheduled occupancy should be communicated to us at least 24 hours prior, which may be subject to availability of request.</p>
          <p>Check-in time shall be at 2:00PM and checkout time shall be at 12:00NN.</p> </div>
          <Button variant="secondary" className="mr-2 submitButton" type="submit" value="Submit">Submit</Button>
              </form>
            </div>
           
       
  );
};

export default Form;