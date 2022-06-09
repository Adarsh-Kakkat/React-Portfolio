import React from 'react'
import CV from '../../assets/Adarsh_Kakkat_cv_ukformat_intl.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn' >Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
