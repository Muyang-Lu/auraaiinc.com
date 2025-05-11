import React from 'react';
import './AuraCat.css';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';

const AuraCat: React.FC = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content aura-cat-container" >
                <div className='aura-cat-name-block'>
                    <img className='aura-cat-name-block-logo' src="assets/aura-cat-image.png" alt="Aura Cat Logo" />
                    <div className='aura-cat-name-block-title'>
                        <div className='aura-cat-name-block-title-auracat-row'>
                            <div className='aura-cat-name-block-title-aura'>
                                Aura
                            </div>
                            <div className='aura-cat-name-block-title-cat'>
                                Cat
                            </div>
                        </div>
                        <div className='aura-cat-name-block-title-description'>
                            - Digitalize your cats life with AI.
                        </div>
                        <div className='aura-cat-name-block-title-try-button-row'>
                            <div className='aura-cat-name-block-title-try-button'>
                                Try AuraCat now!
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footing style='light' />
        </div>

    );
};

export default AuraCat;