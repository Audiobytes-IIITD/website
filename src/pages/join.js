import React from "react";
import "./join.css";


const Join = () => {
  return (
    <div className="join " id="joinus">
        {/* <NavBar /> */}
      <div className="card ">
        <h1>Join AudioBytes</h1>
        <form className="form">
          <p className="line">First Name</p>
          <input type="text" placeholder="Enter your First Name" name="fname" />
          <p className="line">Last Name</p>
          <input type="text" placeholder="Enter your Last Name" name="lname" />
          <p className="line">Email</p>
          <input type="text" placeholder="Enter your Email" name="email" />
          <p className="line">Phone Number</p>
          <input type="text" placeholder="Enter your phone number" name="phone" />
          <p className="line">Role</p>
          <input type="text" placeholder="Singer" name="role" />
          <p className="line">Musical Interests</p>
          <textarea
              placeholder="Tell us about your musical interests"
              name="musical interest"
              className="musical-interest-input"
          ></textarea>
          <p className="line">Experience Level</p>
          <textarea
              placeholder="Tell us about your experience level"
              name="experience level"
              className="experience-level"
          ></textarea>

          <div className="button-container" >
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
