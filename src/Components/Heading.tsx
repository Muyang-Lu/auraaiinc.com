import React from 'react';
import './Heading.css';
import { useState } from 'react';

const Heading: React.FC = () => {
    const [dropdownContainer, setDropdownContainer] = useState("");

    const handleOpenDropdown = (tagName: string) => {
        setDropdownContainer(tagName);
    }
    return <>
        <div className='heading-container' onMouseLeave={() => handleOpenDropdown("")}>
            <div className='heading-logo' onClick={() => window.location.href = "/"}>
                <div className='heading-logo-aura'>Aura</div>
                <div className='heading-logo-ai'>AI</div>
            </div>
            <div className='heading-tags'>
                <div className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("prupose")}
                    onClick={() => window.location.href = "/"}
                >Prupose</div>
                {/* {dropdownContainer === "prupose" && (
                    <div className='heading-dropdown-container' style={{ left: "240px" }}>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/"}>Talk to nature with AI</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/"}>Pet Identification</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/"}>Pet Health</div>
                    </div>
                )} */}
                <div
                    className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("products")}
                >Products</div>
                {dropdownContainer === "products" && (
                    <div className='heading-dropdown-container' style={{ left: "390px" }}>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/aura-cat-intro"}>Aura Cat</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/aura-biolab-intro"}>Aura Bio Lab</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/aura-dog-intro"}>Aura Dog</div>
                    </div>
                )}

                <div
                    className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("about")}
                >About</div>
                {dropdownContainer === "about" && (
                    <div className='heading-dropdown-container' style={{ left: "540px" }}>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/team"}>Team</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/fundraising"}>Fundraising</div>
                        <div className='heading-dropdown-item' onClick={() => window.location.href = "/join-us"}>Join Us</div>
                    </div>
                )}
            </div>
            <div className='heading-aura-cat-button'>
                Try AuraCat
            </div>
        </div>
    </>;
};

export default Heading;