import React from 'react'
import './Interests.css'

export default function Interests(props){
    return(
        <div className='interests--container'>
            <div className='interests--title'>Interests</div>
            <div className='interests--content'>
                {props.hobbies}
            </div>
        </div>
    )
}