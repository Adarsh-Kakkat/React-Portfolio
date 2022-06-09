import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="http://linkdin.com" target='_blank'><GrLinkedin /></a>
            <a href="http://github.com" target='_blank'><BsGithub /></a>
            
        </div>
    )
}

export default HeaderSocials
