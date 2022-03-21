import React, { useState } from 'react';
import About from '../About';
import Works from '../Works';
import Contact from '../Contact';
import Resume from '../Resume';

function Body({currentSection}) {
    const {name} = currentSection;
    if (name === 'About Me'){
        return (
            <About/>
        )
    } else if (name === 'My Work') {
        return (
            <Works/>
        )
    } else if (name === 'Contact Me') {
        return (
            <Contact/>
        )
    } else if (name === 'Resume') {
        return (
            <Resume/>
        )
    }

}

export default Body;
