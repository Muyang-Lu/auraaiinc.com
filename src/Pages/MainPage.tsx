import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';
import './MainPage.css';

const MainPage: React.FC = () => {
    return (
        <div className='page-body' style={{ backgroundColor: '#000000' }}>
            <Heading />
            <div className='page-body-content main-page-container'>
                <img
                    src="assets/main-page-bg-forest.jpg"
                    alt="Aura Cat"
                    className='main-page-image'
                    style={{ objectFit: 'cover', objectPosition: '0 0'}}
                />
                <div className='main-page-text'>
                    Talk to Nature with
                </div>
                <div className='main-page-text-ai'>
                    AI
                </div>
            </div>
            <Footing style='dark'/>
        </div>
    );
};

export default MainPage;