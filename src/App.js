import React from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
export default function App(){
    return(
        <div className='app--container'>
            <Info/>
            <About/>
            <Interests/>
        </div>
    )
}