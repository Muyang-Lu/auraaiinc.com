import React from 'react';
import Heading from '../Components/Heading';
import Footing from '../Components/Footing';

interface FundraisingProps {
    // You can add specific props for this page if needed
}

const Fundraising: React.FC<FundraisingProps> = () => {
    return (
        <div className="page-body">
            <Heading />
            <div className="page-body-content fundraising-container">
                <section className="fundraising-hero">
                    <h1>Join Us in Building the Future</h1>
                    <p>Support AuraAI's mission to revolutionize artificial intelligence</p>
                    <button className="cta-button">Become an Investor</button>
                </section>

                <section className="fundraising-info">
                    <h2>Current Fundraising Round</h2>
                    <div className="funding-stats">
                        <div className="stat">
                            <span className="value">$2.5M</span>
                            <span className="label">Target</span>
                        </div>
                        <div className="stat">
                            <span className="value">$1.2M</span>
                            <span className="label">Raised</span>
                        </div>
                        <div className="stat">
                            <span className="value">48%</span>
                            <span className="label">Complete</span>
                        </div>
                    </div>
                </section>

                <section className="investor-benefits">
                    <h2>Why Invest in AuraAI</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Market Opportunity</h3>
                            <p>Entering a rapidly growing AI market projected to reach $190B by 2025</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Innovative Technology</h3>
                            <p>Proprietary AI algorithms with unique capabilities and applications</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Experienced Team</h3>
                            <p>Led by industry veterans with proven track records</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Clear Path to Market</h3>
                            <p>Strategic partnerships already in place with key industry players</p>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <h2>Interested in Learning More?</h2>
                    <p>Schedule a meeting with our founders or request our investment deck</p>
                    <div className="contact-buttons">
                        <button className="primary-button">Request Investor Deck</button>
                        <button className="secondary-button">Schedule a Call</button>
                    </div>
                </section>
            </div>
            <Footing />
        </div>
    );
};

export default Fundraising;