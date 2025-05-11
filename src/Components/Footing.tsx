import './Footing.css'

interface FootingProps {
    style: string;
}

const Footing = ({ style }: FootingProps) => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className={style === 'dark' ? 'footer-logo-block' : 'footer-logo-block-light'}>
                    Aura <div className='footer-logo-block-ai'>AI</div>
                </div>
                <div className={style === 'dark' ? 'footer-content-block' : 'footer-content-block-light'}>
                    <div className='footer-content-block-title'>Purpose</div>
                    <div className='footer-content-block-item'>Talk to nature with AI</div>
                    <div className='footer-content-block-item'>Pet Identification</div>
                </div>

                <div className={style === 'dark' ? 'footer-content-block' : 'footer-content-block-light'}>
                    <div className='footer-content-block-title'>Products</div>
                    <div className='footer-content-block-item'>Aura Cat</div>
                    <div className='footer-content-block-item'>Aura Bio Lab</div>
                    <div className='footer-content-block-item'>Aura Dog</div>
                </div>

                <div className={style === 'dark' ? 'footer-content-block' : 'footer-content-block-light'}>
                    <div className='footer-content-block-title'>About</div>
                    <div className='footer-content-block-item'>Team</div>
                    <div className='footer-content-block-item'>Join Us</div>
                    <div className='footer-content-block-item'>Fundraising</div>
                </div>
            </div>
            <div className='footer-copyright'>
                &copy; {new Date().getFullYear()} Aura AI Inc. All rights reserved.
            </div>
        </div>
    );
};

export default Footing;