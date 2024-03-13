import React, { useState } from "react";
import "./cards.css";

const Cards = () => {
    const [activeCard, setActiveCard] = useState(2); 

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    return (
            <div className="card-container">
                <div className={`card background1 ${activeCard === 0 ? 'active' : ''}`} onClick={() => handleCardClick(0)}>
                    <div className="shadow">
                        <div className="about-container">
                            <div className="logo">
                                <i className="fa-solid fa-mountain-sun"></i>
                            </div>
                            <div className="about">
                                <div className="name">
                                    Mountain Range
                                </div>
                                <div className="description">
                                    Mountain Range
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card background2 ${activeCard === 1 ? 'active' : ''}`} onClick={() => handleCardClick(1)}>
                    <div className="shadow">
                        <div className="about-container">
                            <div className="logo">
                                <i className="fa-solid fa-tree"></i>
                            </div>
                            <div className="about">
                                <div className="name">
                                    Sunset Art
                                </div>
                                <div className="description">
                                    Sunset Art
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card background3 ${activeCard === 2 ? 'active' : ''}`} onClick={() => handleCardClick(2)}>
                    <div className="shadow">
                        <div className="about-container">
                            <div className="logo">
                                <i className="fa-solid fa-tree"></i>
                            </div>
                            <div className="about">
                                <div className="name">
                                    Tree One third
                                </div>
                                <div className="description">
                                    Tree One third
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card background4 ${activeCard === 3 ? 'active' : ''}`} onClick={() => handleCardClick(3)}>
                    <div className="shadow">
                        <div className="about-container">
                            <div className="logo">
                                <i className="fa-solid fa-face-kiss-wink-heart"></i>
                            </div>
                            <div className="about">
                                <div className="name">
                                    Root Art
                                </div>
                                <div className="description">
                                    Root Art
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card background5 ${activeCard === 4 ? 'active' : ''}`} onClick={() => handleCardClick(4)}>
                    <div className="shadow">
                        <div className="about-container">
                            <div className="logo">
                                <i className="fa-solid fa-cat"></i>
                            </div>
                            <div className="about">
                                <div className="name">
                                    Cat Closeup
                                </div>
                                <div className="description">
                                    Cat Closeup
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cards;
