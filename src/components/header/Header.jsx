import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'


const Header = () => {
    return (
        <div>
            <header>
                <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Adarsh Kakkat</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div >
                    <img src={ME} alt="Myself" className="me"/>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
                </div>
            </header>
        </div>
    )
}

export default Header
