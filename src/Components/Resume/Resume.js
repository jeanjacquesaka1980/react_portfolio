import React from "react";
import CardSkills from '../CardSkills/CardSkills';
import CardProfile from '../CardProfile/CardProfile';
import CardLinks from '../CardLinks/CardLinks';

const Resume = () => {
    return (
        <div className="row">
            <CardSkills />
            <CardProfile />
            <CardLinks />
        </div>
    )
}

export default Resume;