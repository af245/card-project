import React from 'react'
import picture from './picture.png'
import './Info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return(
        <div className='info--container'>
            <div className='picture'>
                <img src={picture} className='pic'/>
            </div>
            <div className='description-container'>
                <div className='name'>Laura Smith</div>
                <div className='career'>Frontend Developer</div>
                <div className='website'>laurasmith.website</div>
            </div>
            <div className='buttons-container'>
                <button className='btn--email'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span className='email'>Email</span>
                </button>
                <button className='btn--linkedIn'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span className='linkedIn'>linkedIn</span>
                </button>
            </div>
        </div>
    )
}