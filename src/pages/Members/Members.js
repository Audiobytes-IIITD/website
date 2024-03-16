import React from "react";
import MemberCard from "../../components/MemberCard";
import "./Members.css"; 
import image from '../../images/man.png';

function Members() {
    return (
        <div className="members-container" id="members">
            <h1 className="members-title" id="title">Members Profile</h1>
            <div className="members-content">
                <MemberCard name="Anish" role="Web Developer" email="anish22075@iiitd.ac.in" image={image} />
                <MemberCard name="Harsh Aggarwal" role="Web Developer" email="harsh20508@iiitd.ac.in" image={image} />
                <MemberCard name="Piyush Narula" role="Web Developer" email="piyush22354@iiitd.ac.in" image={image} />
                <MemberCard name="Anish" role="Web Developer" email="anish22075@iiitd.ac.in" image={image} />
                <MemberCard name="Harsh Aggarwal" role="Web Developer" email="harsh20508@iiitd.ac.in" image={image} />
                <MemberCard name="Piyush Narula" role="Web Developer" email="piyush22354@iiitd.ac.in" image={image} />
                <MemberCard name="Anish" role="Web Developer" email="anish22075@iiitd.ac.in" image={image} />
                <MemberCard name="Harsh Aggarwal" role="Web Developer" email="harsh20508@iiitd.ac.in" image={image} />
                <MemberCard name="Piyush Narula" role="Web Developer" email="piyush22354@iiitd.ac.in" image={image} />
                <MemberCard name="Piyush Narula" role="Web Developer" email="piyush22354@iiitd.ac.in" image={image} />
            </div>
        </div>
    );
};

export default Members;
