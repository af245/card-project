import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className='footer-container'>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faTwitter}/>
            </div>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faFacebook}/>
            </div>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
            <div className='footer-icon'>
                <FontAwesomeIcon icon={faGithub}/>
            </div>

        </div>
    )
}