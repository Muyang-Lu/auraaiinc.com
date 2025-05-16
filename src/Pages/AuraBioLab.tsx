import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';
import './AuraBioLab.css';
import { useState } from 'react';

const AuraBioLab: React.FC = () => {
    const [selectedFeatureID, setSelectedFeatureID] = useState(0);
    const changeSelectedFeatureID = (id: number) => {
        setSelectedFeatureID(id);
    }
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content aura-biolab-container" >
                <div className='aura-biolab-name-block'>
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
                            <img className='aura-biolab-name-block-logo' src="assets/aurabiolab-mouse.png" alt="Aura Cat Logo" />
                            <div className='aura-biolab-name-block-title-try-button'>
                                Request a demo now!
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-block aura-biolab-intro'>
                    <div className='main-block-title' style={{ width: '100%', textAlign: 'left' }}>What is AuraCat?</div>
                    <div className='main-block-content' style={{ 'width': '100%' }}>
                        AuraCat is an AI-driven platform that monitor your lovely cats' daily activities 24 hours a day and digitalize it for health management, daily activity archive, long-term playback and cat lifestyle sharing through the community.
                    </div>
                    <div className='biolab-video-container'>
                        <iframe
                            className='biolab-video'
                            width="840"
                            height="473"
                            src="https://www.youtube.com/embed/GaqQFvl8x1M"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ border: '0' }}
                        ></iframe>
                        <div className='biolab-video-tag-block'>
                            <div className='biolab-video-tag-circle-bg-1' />
                            <div className='biolab-video-tag-circle-bg-2' />
                            <div className='biolab-video-tag'>AuraBioLab Demo</div>
                            <img className='biolab-video-tag-ai-icon' src="assets/ai-star.png" />
                        </div>
                    </div>
                </div>


                <div className='main-block aura-biolab-feature-block'>

                    <div className='main-block-tag' style={{ color: '#570D57d0' }}>- HIGH PERFORMANCE -</div>
                    <div className='main-block-title' style={{ textAlign: 'center' }}>Key Features of AuraBioLab</div>
                    <div className='aura-biolab-feature-block-content'>
                        <div className='feature-item-tag'>
                            <div className='feature-item-tag-color-block' style={{ top: `${selectedFeatureID * 60}px` }} />
                        </div>
                        <div className='feature-list-block'>
                            {[
                                {
                                    title: '100%',
                                    content: 'of mating period precision',
                                },
                                {
                                    title: '100%',
                                    content: 'of mating period recall',
                                },
                                {
                                    title: '120%',
                                    content: 'of accuracy improve against human label',
                                },
                                {
                                    title: 'High quality',
                                    content: 'sniffing detection accuracy',
                                },
                                {
                                    title: 'Richer',
                                    content: 'detection matrix (Speed, Location, Trajectory)',
                                },
                                {
                                    title: '0.06',
                                    content: 'second detection time (16 FPS)',
                                },
                            ].map((feature, idx) => (
                                <div
                                    key={idx + 1}
                                    className={selectedFeatureID === idx ? 'feature-item-highlight' : 'feature-item'}
                                    onMouseEnter={() => changeSelectedFeatureID(idx)}
                                >
                                    <div className={selectedFeatureID === idx ? 'feature-item-title-highlight' : 'feature-item-title'}>
                                        {feature.title}
                                    </div>
                                    <div className={selectedFeatureID === idx ? 'feature-item-content-highlight' : 'feature-item-content'}>
                                        {feature.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='main-block aura-biolab-accuracy-block'>
                    <div className='main-block-tag' style={{ color: '#570D57d0' }}>- HIGH ACCURACY -</div>
                    <div className='main-block-title' style={{ textAlign: 'center' }}>More Precise than a Human Annotator</div>
                    <div className='aura-biolab-accuracy-content'>
                        <div className='accuracy-empty-deac' />
                        <div className='accuracy-gt-comparison' >
                            <img className='accuracy-gt-comparison-gt' src="assets/aurabiolab-evaluation.png" alt="GT" />
                        </div>
                        <div className='accuracy-empty-deac' />
                    </div>
                </div>

                <div className='main-block aura-biolab-matrix-block'>
                    <div className='main-block-tag' style={{ color: '#570D57d0' }}>RICH DETECTION</div>
                    <div className='main-block-title' style={{ textAlign: 'center' }}>Quantities measurement from multi dimensions</div>
                    <div className='aura-biolab-matrix-content'>

                        <div className='matrix-card' >
                            <img className='matrix-card-image' src="assets/mouse-speed-detection.jpg" alt="Speed" />
                            <div className='matrix-card-title'>Speed Analysis</div>
                            <div className='matrix-card-content'>
                                Precise velocity estimates for rigorous quantitative studies
                            </div>
                        </div>
                        <div className='matrix-card' >
                            <img className='matrix-card-image' src="assets/mouse-trajectory-detection.png" alt="Speed" />
                            <div className='matrix-card-title'>Trajectory Mapping</div>
                            <div className='matrix-card-content'>
                                Full-path reconstruction for comprehensive behavioural insight
                            </div>
                        </div>
                        <div className='matrix-card' >
                            <img className='matrix-card-image' src="assets/mouse-location-detection.png" alt="Speed" />
                            <div className='matrix-card-title'>Location Heat-maps</div>
                            <div className='matrix-card-content'>
                                Identify activity hotspots and uncover movement patterns
                            </div>
                        </div>
                        <div className='matrix-card' >
                            <img className='matrix-card-image' src="assets/mouse-probability-detection.png" alt="Speed" />
                            <div className='matrix-card-title'>Confidence Scoring</div>
                            <div className='matrix-card-content'>
                                Probability scores flag low-confidence labels for rapid human review
                            </div>
                        </div>
                        <div className='matrix-card' >
                            <img className='matrix-card-image' src="assets/model-pipeline.png" alt="Speed" />
                            <div className='matrix-card-title'>AI-Driven Labeling</div>
                            <div className='matrix-card-content'>
                                Let AuraBioLab handle the data grunt-work so you can focus on discovery
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-block aura-biolab-request-block'>
                    <div className='request-block-bg'>
                        <div className='request-block-left' >
                            <div className='request-block-left-title'>COORBERATION</div>
                            <div className='request-block-left-content'>
                                To Know More Details ...
                            </div>
                            <div className='request-block-left-button'>
                                Request a Demo
                            </div>
                        </div>
                        <div className='request-block-right'>
                            <img className='request-block-right-image' src="assets/supported-device.png" alt="Aura Cat Logo" />
                        </div>
                    </div>
                </div>

            </div>
            <Footing style='light' />
        </div>
    );
};

export default AuraBioLab;