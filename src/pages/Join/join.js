import React, { useState } from "react";
import "./join.css";

const Join = () => {
  const [showOthers, setShowOthers] = useState(false);

  const toggleOthers = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div className="join" id="joinus">
      <div className="card">
        <h1 className="join-heading ">Join Us</h1>
        <br />
        <form className="form">
          <div className="input-group underline"> 
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="First Name" />
          </div>
          <div className="input-group underline"> 
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname"placeholder="Last Name" />
          </div>
          <div className="input-group underline"> 
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"placeholder="Email" />
          </div>
          <div className="input-group underline"> 
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Mobile" />
          </div>
          <div className="input-group underline"> 
            <label htmlFor="musical-interest">Musical Interests</label>
            <textarea id="musical-interest" name="musical interest" placeholder="Musical Interests"></textarea>
          </div>

          {showOthers && (
            <>
              <div className="input-group underline"> 
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" placeholder="Role"/>
              </div>
              <div className="input-group underline"> 
                <label htmlFor="experience-level">Experience Level</label>
                <textarea id="experience-level" name="experience level" placeholder="Experience Level"></textarea>
              </div>
            </>
          )}

          <div className="button-container">
            <button className="submit">Submit</button>
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
