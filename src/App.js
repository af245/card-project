import React from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

export default function App(){
    return(
        <div className='app--container'>
            <Info
                name={'Laura Smith'}
                career={'Frontend Developer'}
                website={'laurasmith.website'}
            />
            <About
                aboutText={'I am a frontend developer with a particular interest in making things simple and automating daily tasks.I try to keep up with security and best practices, and am always looking for new things to learn.'}
            />
            <Interests
                hobbies={'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'}
            />
            <Footer/>
        </div>
    )
}