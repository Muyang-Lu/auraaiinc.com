import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';
import './AuraDog.css';

interface AuraDogProps {
    // Define your props here
}

const AuraDog: React.FC<AuraDogProps> = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content aura-dog-container" >
                <div className='aura-dog-name-block'>
                    {/* <img className='aura-dog-name-block-logo' src="assets/aura-cat-image.png" alt="Aura Cat Logo" /> */}
                    <div className='aura-dog-name-block-title'>
                        <div className='aura-dog-name-block-title-auradog-row'>
                            <div className='aura-dog-name-block-title-aura'>
                                Aura
                            </div>
                            <div className='aura-dog-name-block-title-dog'>
                                dog
                            </div>
                        </div>
                        <div className='aura-dog-name-block-title-description'>
                            - Understand your dogs better with AI.
                        </div>
                        <div className='aura-dog-name-block-title-comming-soon-button-row'>
                            <div className='aura-dog-name-block-title-comming-soon-button'>
                                <span role="img" aria-label="warning" style={{ marginRight: '8px' }}>⚠️</span>
                                Coming soon!
                            </div>
                        </div>
                        <div className='aura-dog-name-block-title-try-button-row'>
                            <div className='aura-dog-name-block-title-try-button'>
                                Contribute to this project.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footing style='light' />
        </div>
    );
};

export default AuraDog;