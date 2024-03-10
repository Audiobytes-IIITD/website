import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div className="join" id="joinus">
      <div className="card">
        <h1 className="join-heading ">Join AudioBytes</h1>
        <form className="form">
          <div className="input-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="input-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role" />
          </div>
          <div className="input-group">
            <label htmlFor="musical-interest">Musical Interests</label>
            <textarea
              id="musical-interest"
              name="musical interest"
              placeholder="Tell us about your musical interests"
              className="musical-interest-input"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="experience-level">Experience Level</label>
            <textarea
              id="experience-level"
              name="experience level"
              placeholder="Tell us about your experience level"
              className="experience-level"
            ></textarea>
          </div>

          <div className="button-container">
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;