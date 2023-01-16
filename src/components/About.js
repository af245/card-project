import React from 'react'
import './About.css'
export default function About(props){
    return(
        <div className='about--container'>
            <div className='title'>About</div>
            <div className='content'>
                {props.aboutText}
            </div>
        </div>
    )
}