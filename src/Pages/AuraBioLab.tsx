import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';
import './AuraBioLab.css';

const AuraBioLab: React.FC = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content aura-biolab-container" >
                <div className='aura-biolab-name-block'>
                    {/* <img className='aura-biolab-name-block-logo' src="assets/aura-cat-image.png" alt="Aura Cat Logo" /> */}
                    <div className='aura-biolab-name-block-title'>
                        <div className='aura-biolab-name-block-title-aurabiolab-row'>
                            <div className='aura-biolab-name-block-title-aura'>
                                Aura
                            </div>
                            <div className='aura-biolab-name-block-title-biolab'>
                                BioLab
                            </div>
                        </div>
                        <div className='aura-biolab-name-block-title-description'>
                            - Power your biology research with AI.                        </div>
                        <div className='aura-biolab-name-block-title-try-button-row'>
                            <div className='aura-biolab-name-block-title-try-button'>
                                Request a demo now!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footing style='light' />
        </div>
    );
};

export default AuraBioLab;