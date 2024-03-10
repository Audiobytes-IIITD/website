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
        <h1 className="join-heading ">Join AudioBytes</h1>
        <br />
        <form className="form">
          <div className="input-group">
            <label htmlFor="fname"></label>
            <input type="text" id="fname" name="fname" placeholder="First Name" />
          </div>
          <div className="input-group">
            <label htmlFor="lname"></label>
            <input type="text" id="lname" name="lname" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="phone"></label>
            <input type="text" id="phone" name="phone" placeholder="Phone Number" />
          </div>

          <div className="input-group">
            <label htmlFor="musical-interest"></label>
            <textarea
              id="musical-interest"
              name="musical interest"
              placeholder="Tell us about your musical interests"
              className="musical-interest-input"
            ></textarea>
          </div>

          {showOthers && (
            <>
              <div className="input-group">
                <label htmlFor="role"></label>
                <input type="text" id="role" name="role" placeholder="Role" />
              </div>
              <div className="input-group">
                <label htmlFor="experience-level"></label>
                <textarea
                  id="experience-level"
                  name="experience level"
                  placeholder="Tell us about your experience level"
                  className="experience-level"
                ></textarea>
              </div>
            </>
          )}

          <div className="button-container"  >
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>
            <button className="others" id="show"type="button" onClick={toggleOthers}>
              {showOthers ? "Hide Others" : "Show Others"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
