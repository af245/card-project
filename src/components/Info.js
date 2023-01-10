import React from 'react'
import picture from './picture.png'
import './Info.css'

export default function Info(){
    return(
        <div className='info--container'>
            <div className='picture'>
                <img src={picture}/>
            </div>
            <div className='description-container'>
                <div className='name'>Laura Smith</div>
                <div className='career'>Frontend Developer</div>
                <div className='website'>laurasmith.website</div>
            </div>
            <div className='buttons-container'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}