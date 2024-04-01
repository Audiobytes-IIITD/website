import React, { useState } from "react";
import "./join.css";

const Join = () => {
  const [showOthers, setShowOthers] = useState(false);

  const toggleOthers = () => {
    setShowOthers(!showOthers);
  };

  const [user, setUser] = useState(
    {
      Fname: '', Lname: '', Email: '', Mobile: '', musical_interest: '', role: '', experience_level: ''
    }
  )
  let name, value
  const data = (e) => {
    name = e.target.name;
    value = e.target.value
    setUser({...user, [name]: value});
  }

  const getData = async (e) => {
    const {Fname, Lname, Email, Mobile, musical_interest, role, experience_level} = user
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        Fname, Lname, Email, Mobile, musical_interest, role, experience_level
      })

    }
    const res = await fetch(
      'https://audiobytes-44eed-default-rtdb.firebaseio.com/UserData.json', 
        options
      )
      if (res){
        alert("Message sent")
      }
      else{
        alert("Error in sending data")
      }
  }

  return (
    <div className="join" id="joinus">
      <div className="card">
        <h1 className="join-heading ">Join Us</h1>
        <br />
        <form className="form" method="POST">
          <div className="input-group "> 
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="Fname" placeholder="First Name" autoComplete="off" value={user.Fname} required onChange={data}/>
          </div>
          <div className="input-group "> 
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="Lname"placeholder="Last Name" autoComplete="off" value={user.Lname} required onChange={data}/>
          </div>
          <div className="input-group "> 
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="Email"placeholder="Email" autoComplete="off" value={user.Email}  required onChange={data}/>
          </div>
          <div className="input-group "> 
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="Mobile" placeholder="Mobile" autoComplete="off" value={user.Mobile} required onChange={data}/>
          </div>
          <div className="input-group "> 
            <label htmlFor="musical-interest">Musical Interests</label>
            <textarea id="musical-interest" name="musical_interest" placeholder="Musical Interests" value={user.musical_interest} required onChange={data}></textarea>
          </div>

          {showOthers && (
            <>
              <div className="input-group "> 
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" placeholder="Role" autoComplete="off" value={user.role} required onChange={data} />
              </div>
              <div className="input-group "> 
                <label htmlFor="experience-level">Experience Level</label>
                <textarea id="experience-level" name="experience_level" placeholder="Experience Level" value={user.experience_level} required onChange={data}></textarea>
              </div>
            </>
          )}

          <div className="button-container">
            <button className="submit" onClick={getData}>Submit</button>
            <button className="cancel">Cancel</button>
            <button className="others" id="show" type="button" onClick={toggleOthers}>
              {showOthers ? "Hide Others" : "Show Others"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
