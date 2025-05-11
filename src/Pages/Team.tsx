import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';

const Team: React.FC = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content team-container">
                <h1>Meet Our Team</h1>
                {/* Your content goes here */}
            </div>
            <Footing />
        </div>
    );
};

export default Team;