import React from "react";

const MemberCard = ({ name, role, email, image }) => {
    return (
        <div className="flex items-center gap-4 bg-black-800 p-4 rounded-xl flex-wrap xs:justify-center sm:justify-center xxs:justify-center" style={{ width: "300px", height: "150px", margin: "10px", flexBasis: "calc(25% - 20px)" }}> {/* Added flexBasis for controlling width */}
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
