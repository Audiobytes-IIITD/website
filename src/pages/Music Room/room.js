import React, { useState } from "react";
import "./room.css";
import arrow from "../../images/arrow_icon.png"

const Room = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

    return (
        <div className="room">
            <div className="room-container">
                <form action="https://api.web3forms.com/submit" method="POST" id="form-send">
                    <div id="room-header" >
                        <h1 id="room-title">Access Music Room</h1>
                        <hr />
                    </div>
                    <input type="hidden" name="access_key" value="f023b5a7-817f-4a4b-9f22-5f8268513281"></input>

                    <input type="text" name="name" placeholder="Enter name" id="input-form" required></input>
                    <input type="email" name="email" placeholder="Enter Your Email" id="input-form" required></input>
                    <input type="Number" name="hours" placeholder="Hours Required" id="input-form" required></input>
                    <input type="date" name="date" placeholder="Enter Date" id="input-form" required min={tomorrowFormatted}></input>

                    <button type="submit">Submit <img src={arrow} alt="arrow icon" /></button>
                    
                </form>
            </div>
        </div>
    );
}

export default Room;
