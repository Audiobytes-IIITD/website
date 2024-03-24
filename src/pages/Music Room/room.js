import React, { useState } from "react";
import "./room.css";

const Room = () => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="room">
            <div className="room-container">
                <h1 id="room-title" style={{display:"flex",alignItems:"center"}}>Access Music Room</h1>
                
                <div className="login-box">
                    <form>
                        <div className="user-box">
                            <input
                                type="text"
                                name=""
                                required=""
                                onFocus={() => setFocused(true)} 
                                onBlur={(e) => {
                                    if (e.target.value === '') {
                                        setFocused(false);
                                    }
                                }}
                            />
                            <label className={focused ? "label active" : "label"}>Enter your Name</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="email" 
                                name=""
                                required=""
                                onFocus={() => setFocused(true)} 
                                onBlur={(e) => {
                                    if (e.target.value === '') {
                                        setFocused(false);
                                    }
                                }}
                            />
                            <label className={focused ? "label active" : "label"}>Enter your IIITD Mail</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="number" 
                                name=""
                                required=""
                                onFocus={() => setFocused(true)} 
                                onBlur={(e) => {
                                    if (e.target.value === '') {
                                        setFocused(false);
                                    }
                                }}
                            />
                            <label className={focused ? "label active" : "label"}>Hours</label>
                        </div>
                        <div className="user-box" id="date-label">
                            <input
                                type="date" 
                                name=""
                                required=""
                                onFocus={() => setFocused(true)} 
                                onBlur={(e) => {
                                    if (e.target.value === '') {
                                        setFocused(false);
                                    }
                                }}
                                placeholder="Select Date"
                                style={{ color: 'black' }}
                            />
                            <label className={focused ? "label active" : "label" } >Date</label>
                        </div>
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Room;
