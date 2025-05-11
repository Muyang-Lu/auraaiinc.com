import React from 'react';
import './AuraCat.css';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';

const AuraCat: React.FC = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content aura-cat-container" >
                <div className='aura-cat-name-block main-block'>
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
                <div className='main-block aura-cat-into-pragraph'>
                    <div className='main-block-title'>What is AuraCat?</div>
                    <div className='main-block-content' style={{ 'width': '60%' }}>
                        AuraCat is an AI-driven platform that monitor your lovely cats’ daily activities 24 hours a day and digitalize it for health management, daily activity archive, long-term playback and cat lifestyle sharing through the community.
                    </div>
                </div>
                <div className='main-block aura-cat-major-features'>
                    <div className='feature-block'>
                        <div className='feature-block-image'>

                        </div>
                        <div className='feature-block-title'>Realtime Detection</div>
                        <div className='feature-block-content'>
                            It detects your cat’s trajectory, speed, location for every seconds.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>

                        </div>
                        <div className='feature-block-title'>States Classification</div>
                        <div className='feature-block-content'>
                            It classify your cat’s states as sleeping, playing, eating, and pooping.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>

                        </div>
                        <div className='feature-block-title'>Hazard Warning</div>
                        <div className='feature-block-content'>
                            It alert you when your cat is fighting, vomiting, and scratching.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>

                        </div>
                        <div className='feature-block-title'>Long-term Analysis</div>
                        <div className='feature-block-content'>
                            Archive
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>

                        </div>
                        <div className='feature-block-title'>Community Sharing</div>
                        <div className='feature-block-content'>
                            Compare and share your cats with broad community.
                        </div>
                    </div>
                </div>
            </div>
            <Footing style='light' />
        </div>

    );
};

export default AuraCat;