import React from 'react';
import './AuraCat.css';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';
import { LockOutlined } from '@ant-design/icons';

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
                            <div className='aura-cat-name-block-title-try-button' onClick={() => window.location.href = "/auracat"}>
                                Try AuraCat now!
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-block aura-cat-into-pragraph'>
                    <div className='main-block-title'>What is AuraCat?</div>
                    <div className='main-block-content' style={{ 'width': '65%' }}>
                        AuraCat is an AI-driven platform that monitor your lovely cats' daily activities 24 hours a day and digitalize it for health management, daily activity archive, long-term playback and cat lifestyle sharing through the community.
                    </div>
                </div>
                <div className='main-block aura-cat-major-features'>
                    <div className='feature-block'>
                        <div className='feature-block-image'>
                            <img className='feature-block-icon' src="assets/realtime-icon.png" alt="Aura Cat Feature" />
                        </div>
                        <div className='feature-block-title'>Realtime Detection</div>
                        <div className='feature-block-content'>
                            It detects your cat's trajectory, speed, location for every seconds.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>
                            <img className='feature-block-icon' src="assets/state-classification-icon.png" alt="Aura Cat Feature" />
                        </div>
                        <div className='feature-block-title'>States Classification</div>
                        <div className='feature-block-content'>
                            It classify your cat's states as sleeping, playing, eating, and pooping.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>
                            <img className='feature-block-icon' src="assets/hazard-warning-icon.png" alt="Aura Cat Feature" />
                        </div>
                        <div className='feature-block-title'>Hazard Warning</div>
                        <div className='feature-block-content'>
                            It alert you when your cat is fighting, vomiting, and scratching.
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>
                            <img className='feature-block-icon' src="assets/long-term-icon.png" alt="Aura Cat Feature" />
                        </div>
                        <div className='feature-block-title'>Long-term Analysis</div>
                        <div className='feature-block-content'>
                            Archive
                        </div>
                    </div>

                    <div className='feature-block'>
                        <div className='feature-block-image'>
                            <img className='feature-block-icon' src="assets/community-icon.png" alt="Aura Cat Feature" />
                        </div>
                        <div className='feature-block-title'>Community Sharing</div>
                        <div className='feature-block-content'>
                            Compare and share your cats with broad community.
                        </div>
                    </div>
                </div>
                <div className='main-block aura-cat-major-features-numbers'>
                    <div className='feature-numbers-block'>
                        <div className='feature-numbers-block-title'>No. 1</div>
                        <div className='feature-numbers-block-content'>
                            First AI camera  for cat health management
                        </div>
                    </div>
                    <div className='feature-numbers-block'>
                        <div className='feature-numbers-block-title'>168%</div>
                        <div className='feature-numbers-block-content'>
                            AI model accuracy improvement than public models
                        </div>
                    </div>
                    <div className='feature-numbers-block'>
                        <div className='feature-numbers-block-title'>3,000+</div>
                        <div className='feature-numbers-block-content'>
                            Real cat parents sharing their cats' digital lives
                        </div>
                    </div>
                </div>

                <div className='main-block aura-cat-live-ai-block'>
                    <div className='main-block-tag'>- CLOSE WATCH -</div>
                    <div className='main-block-title'>24 / 7 Live AI Cat Detection</div>
                    <div className='live-ai-block-row'>
                        <div className='live-ai-block-row-left'>
                            <div className='live-ai-block-row-left-item'>
                                <div className='live-ai-block-row-left-title'>Real time Trajectory</div>
                                <div className='live-ai-block-row-left-content'>
                                    Your personalized AI model pinpoints your cat's locations in real time — outperforming public models by a wide margin.
                                </div>
                            </div>
                            <div className='live-ai-block-row-left-item'>
                                <div className='live-ai-block-row-left-title'>Speed estimation</div>
                                <div className='live-ai-block-row-left-content'>
                                    AuraCat estimates your cat's speed against calibrated references, showing you exactly how active—or delightfully lazy—your feline really is.
                                </div>
                            </div>
                            <div className='live-ai-block-row-left-item'>
                                <div className='live-ai-block-row-left-title'>Status classification</div>
                                <div className='live-ai-block-row-left-content'>
                                    Whether it's mealtime, litter time, playtime, or nap time, AuraCat instantly labels your cat's status.
                                </div>
                            </div>
                        </div>
                        <div className='live-ai-block-row-right'>
                            <img className='live-ai-block-row-right-image' src="assets/ai-background.png" alt="Aura Cat Live AI" />
                            <div className='live-ai-block-row-right-image-description'>
                                <div className='live-ai-block-row-right-image-description-title'>Realtime detection</div>
                                <div className='live-ai-block-row-right-image-description-content'>
                                    Trajectory, Speed, and status
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-block aura-cat-activity-feature'>
                    <div className='main-block-tag'>- SEE ACTIVITIES -</div>
                    <div className='main-block-title'>Activity & Status Monitoring</div>
                    <div className='activity-feature-row'>
                        <div className='activity-feature-block' style={{
                            "width": "10%",
                            "borderRadius": "0px 30px 30px 0px",
                            borderWidth: "1px 1px 1px 0px",
                        }}></div>
                        <div className='activity-feature-block'>
                            <div className='activity-feature-block-content'>
                                <div className='activity-feature-block-content-item'>
                                    <div className='activity-feature-block-content-item-decoration'></div>
                                    <div className='activity-feature-block-content-item-title'>  Status Scoring</div>
                                    <div className='activity-feature-block-content-item-description'>
                                        AuraCat assigns a daily wellness score, letting you know whether your cat is thriving.
                                    </div>
                                </div>
                                <div className='activity-feature-block-content-item'>
                                    <div className='activity-feature-block-content-item-decoration'></div>
                                    <div className='activity-feature-block-content-item-title'>  Activity Summary</div>
                                    <div className='activity-feature-block-content-item-description'>
                                        AuraCat lets you see your cat's entire day at a glance.
                                    </div>
                                </div>
                            </div>
                            <div className='activity-feature-block-image'>
                                <img className='activity-feature-block-image-content' src="assets/main-dashboard.png" alt="Aura Cat Activity Feature" />
                            </div>
                        </div>
                        <div className='activity-feature-block' style={{
                            "width": "10%",
                            "borderRadius": "30px 0px 0px 30px",
                            borderWidth: "1px 0px 1px 1px",
                        }}></div>
                    </div>
                </div>

                <div className='main-block aura-cat-ai-chat'>
                    <div className='main-block-tag'>Cat with AI</div>
                    <div className='main-block-title'>Ask AI about Your Cats ...</div>
                    <div className='ai-chat-row'>
                        <img className='ai-chat-image' src="assets/ai-chat-bar-q1.png" alt="Aura Cat AI Chat" />
                        {[
                            { left: 420, top: 20, rotate: -6, height: 48 },
                            { left: 520, top: 90, rotate: 7, height: 38 },
                            { left: 740, top: 30, rotate: 4, height: 44 },
                            { left: 750, top: 110, rotate: -8, height: 46 },
                        ].map((pos, idx) => (
                            <img
                                key={idx}
                                className='ai-chat-image'
                                src={`assets/ai-chat-bar-q${idx + 2}.png`}
                                alt="Aura Cat AI Chat"
                                style={{
                                    left: `${pos.left}px`,
                                    top: `${pos.top}px`,
                                    transform: `rotate(${pos.rotate}deg)`,
                                    height: `${pos.height}px`,
                                    opacity: 0.7,
                                    pointerEvents: 'none',
                                }}
                            />
                        ))}
                        <div className='ai-chat-response-container'>
                            <div className='ai-chat-response'>
                                <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px', textAlign: 'left' }}>
                                    Today's Qbi Status
                                </div>
                                <ul style={{ paddingLeft: '20px', margin: 0, textAlign: 'left', lineHeight: '2.5' }}>
                                    <li>
                                        <span style={{ color: '#4CAF50', fontWeight: 500 }}>Activity:&nbsp;</span> Qbi spent <b>2 hours</b> playing and <b>30 minutes</b> exploring new spots.
                                    </li>
                                    <li>
                                        <span style={{ color: '#2196F3', fontWeight: 500 }}>Rest:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Enjoyed <b>15 hours</b> of restful sleep, mostly in her favorite sunny corner.
                                    </li>
                                    <li>
                                        <span style={{ color: '#FF9800', fontWeight: 500 }}>Meals:&nbsp;&nbsp;&nbsp;&nbsp;</span> Ate <b>3 times</b> today, with a healthy appetite.
                                    </li>
                                    <li>
                                        <span style={{ color: '#9C27B0', fontWeight: 500 }}>Mood:&nbsp;&nbsp;&nbsp;&nbsp;</span> Appears <b>happy</b> and <b>relaxed</b>, with lots of purring and gentle tail flicks.
                                    </li>
                                </ul>
                                <div style={{ marginTop: '12px', color: '#888', textAlign: 'left' }}>
                                    <em>Tip: Qbi's activity level is above average today. Keep up the great care!</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-block aura-cat-security-block'>
                    <div className='security-container'>
                        <div className='security-container-left'>
                            <div className='security-container-left-tag'>
                                SECURITY
                                <img className='security-container-left-tag-icon' src="assets/security-lock.png" alt="Aura Cat Security" />
                            </div>
                            <div className='security-container-left-title'>True Edge AI & Privacy</div>
                            <div className='security-container-left-content'>
                                All AI runs locally on your device — not a single image leaves your home. AuraCat only sees, captures, and analyzes cats.
                            </div>
                            <div className='security-container-left-bottom'>
                                Nothing else.
                            </div>
                        </div>
                        <div className='security-container-right'>
                            <div className='security-image-container'>
                                <img className='security-image' src="assets/ai-background.png" alt="Aura Cat Security" />
                                <div className='security-image-tag'>
                                    <div className='security-image-tag-icon'>
                                        <LockOutlined />
                                    </div>
                                    <div className='security-image-tag-label'>
                                        <div className='security-image-tag-title'>Digitalized Lifestyle</div>
                                        <div className='security-image-tag-content'>
                                            Only transfer the statistic detection
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='main-block aura-cat-long-term-block'>
                    <div className='main-block-tag' style={{ margin: 0 }}>LONG TERM</div>
                    <div className='main-block-title' style={{ height: '40px', margin: 0 }}>
                        Long Term Analysis - Notice Your Cat's Changes
                    </div>
                    <div className='main-block-content' style={{ 'color': 'grey', margin: 0 }}>
                        Rewind and relive your cat's life —from kittenhood to today. Compare changes in behavior and activity over time.
                    </div>
                    <div className='long-term-block-row'>
                        <div className='long-term-block-item'>
                            <img className='long-term-block-image' src="assets/speed-curve.png" alt="Aura Cat Long Term" />
                            <div className='long-term-block-image-description' style={{ right: '80px', top: '0px' }}>
                                <div className='long-term-block-image-description-dot-1' />
                                <div className='long-term-block-image-description-dot-2' />
                                <div className='long-term-block-image-description-bg' />
                                <img className='long-term-block-image-description-icon' src="assets/ai-star.png" />
                                <div className='long-term-block-image-description-content'>
                                    Average Speed
                                </div>
                            </div>
                        </div>
                        <div className='long-term-block-item'>
                            <img className='long-term-block-image' src="assets/duration-curve.png" alt="Aura Cat Long Term" />
                            <div className='long-term-block-image-description' style={{ left: '10px', bottom: '10px' }}>
                                <div className='long-term-block-image-description-dot-1' />
                                <div className='long-term-block-image-description-dot-2' />
                                <div className='long-term-block-image-description-bg' />
                                <img className='long-term-block-image-description-icon' src="assets/ai-star.png" />
                                <div className='long-term-block-image-description-content'>
                                    Detected Duration
                                </div>
                            </div>
                        </div>
                        <div className='long-term-block-item'>
                            <img className='long-term-block-image' src="assets/distance-curve.png" alt="Aura Cat Long Term" />
                            <div className='long-term-block-image-description' style={{ left: '500px', top: '10px' }}>
                                <div className='long-term-block-image-description-dot-1' />
                                <div className='long-term-block-image-description-dot-2' />
                                <div className='long-term-block-image-description-bg' />
                                <img className='long-term-block-image-description-icon' src="assets/ai-star.png" />
                                <div className='long-term-block-image-description-content'>
                                    Total Distance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='main-block aura-cat-community'>
                    <div className='main-block-tag'>- SHRING -</div>
                    <div className='main-block-title'>Global Cat Community</div>
                    <div className='main-block-content' style={{ 'color': 'grey', margin: 0 }}>
                        Share and compare your cat's lifestyle with others—by breed, age, or gender. See if your cat is more active (or lazy!) than the rest.
                    </div>
                    <div className='community-row'>
                        <img className='community-image-side' src="assets/cat-sharing-2.png" alt="Aura Cat Community" style={{ left: 0 }} />
                        <img className='community-image-center' src="assets/cat-sharing-1.png" alt="Aura Cat Community" />
                        <img className='community-image-side' src="assets/cat-sharing-2.png" alt="Aura Cat Community" style={{ right: 0 }} />
                    </div>
                </div>

                <div className='main-block aura-cat-customization'>
                    <div className='customization-image-block'>
                        <img className='customization-image' src="assets/auto-train.png" alt="Aura Cat Customization" />
                        <img className='customization-image' src="assets/auto-label.png" alt="Aura Cat Customization"
                            style={{ left: '20px', top: '-20px' }} />
                    </div>
                    <div className='customization-content'>
                        <div className='customization-content-tag'>- CUSTOMIZE -</div>
                        <div className='customization-content-title'>Cumstoized AI Model</div>
                        <div className='customization-content-description'>
                            We help you to collect data and train your personalized model with few clicks that knows your environment best.                        </div>
                    </div>
                </div>

                <div className='main-block aura-cat-try-button'>
                    <div className='main-block-title' style={{ width: '400px' }}>To Explore More ...</div>
                    <div className='aura-cat-name-block-title-try-button' onClick={() => window.location.href = "/auracat"}>
                        Try AuraCat now!
                    </div>
                </div>

            </div>
            <Footing style='light' />
        </div>

    );
};

export default AuraCat;