import React from "react";

const MemberCard = ({ name, role, email, image }) => {
    return (
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl flex-wrap xs:justify-center sm:justify-center xxs:justify-center">
            <img src={image} alt="member" className="w-32 h-32 rounded-full" />
            <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg font-bold">{name}</h1>
                <p className="text-white text-sm">{role}</p>
                <p className="text-white text-sm">{email}</p>
            </div>
        </div>
    );
};

export default MemberCard;