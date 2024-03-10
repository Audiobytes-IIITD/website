import React from "react";
import MemberCard from "../components/MemberCard";

function Members() {
    return (
        <div className="bg-slate-900 content-container pt-16" id="members">
            <div className="flex flex-col h-screen gap-10 lg:w-[fit-content] lg:ml-8 p-4 md:w-[fit-content] md:ml-8 xmd:w-[fit-content] xmd:ml-8">
                <h1 className="text-white text-4xl font-bold">Members Profile</h1>
                <MemberCard name="Harsh Aggarwal" role="Web Developer" email="harsh20508@iiitd.ac.in" image="images/profile.svg" />
            </div>
        </div>
    );
};

export default Members;
