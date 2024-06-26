import React, { useEffect, useState } from "react";

const MemberCard = ({ name, role, email, image }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const calculateMargin = () => {
        if (screenWidth >= 769 && screenWidth <= 1440) {
            return "100px";
        } else {
            return "10px"; 
        }
    };

    return (
        <div className="flex items-center gap-4 bg-black-800 p-4 rounded-xl flex-wrap xs:justify-center sm:justify-center xxs:justify-center" style={{ width: "300px", height: "150px", margin: calculateMargin(), flexBasis: "calc(25% - 20px)" }}>
            <img src={image} alt="member" className="w-32 h-32 rounded-full" />
            <div className="flex flex-col gap-2">
                <h2 className="text-white text-lg font-bold">{name}</h2>
                <p className="text-white text-sm">{role}</p>
                <p className="text-white text-sm">{email}</p>
            </div>
        </div>
    );
};

export default MemberCard;
