import React from 'react';
import './Heading.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Heading: React.FC = () => {
    const navigate = useNavigate();
    const [dropdownContainer, setDropdownContainer] = useState("");

    const handleOpenDropdown = (tagName: string) => {
        setDropdownContainer(tagName);
    }
    return <>
        <div className='heading-container' onMouseLeave={() => handleOpenDropdown("")}>
            <div className='heading-logo' onClick={() => navigate("/")}>
                <div className='heading-logo-aura'>Aura</div>
                <div className='heading-logo-ai'>AI</div>
            </div>
            <div className='heading-tags'>
                <div className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("prupose")}
                    onClick={() => navigate("/")}
                >Prupose</div>
                {/* {dropdownContainer === "prupose" && (
                    <div className='heading-dropdown-container' style={{ left: "240px" }}>
                        <div className='heading-dropdown-item' onClick={() => navigate("/")}>Talk to nature with AI</div>
                        <div className='heading-dropdown-item' onClick={() => navigate("/")}>Pet Identification</div>
                        <div className='heading-dropdown-item' onClick={() => navigate("/")}>Pet Health</div>
                    </div>
                )} */}
                <div
                    className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("products")}
                >Products</div>
                {dropdownContainer === "products" && (
                    <div className='heading-dropdown-container' style={{ left: "390px" }}>
                        <div className='heading-dropdown-item' onClick={() => navigate("/aura-cat-intro")}>Aura Cat</div>
                        <div className='heading-dropdown-item' onClick={() => navigate("/aura-biolab-intro")}>Aura Bio Lab</div>
                        <div className='heading-dropdown-item' onClick={() => navigate("/aura-dog-intro")}>Aura Dog</div>
                    </div>
                )}

                <div
                    className='heading-tag-mune'
                    onMouseEnter={() => handleOpenDropdown("about")}
                >About</div>
                {dropdownContainer === "about" && (
                    <div className='heading-dropdown-container' style={{ left: "540px" }}>
                        <div className='heading-dropdown-item' onClick={() => navigate("/team")}>Team</div>
                        {/* <div className='heading-dropdown-item' onClick={() => navigate("/fundraising")}>Fundraising</div> */}
                        <div className='heading-dropdown-item' onClick={() => navigate("/join-us")}>Join Us</div>
                    </div>
                )}
            </div>
            <a className='heading-aura-cat-button' href="/auracat/">
                Try AuraCat
            </a>
        </div>
    </>;
};

export default Heading;