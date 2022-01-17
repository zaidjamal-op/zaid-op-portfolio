import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view';

function About() {
    return (
        <div class="max-w-4xl mt-20 mx-auto">
            <p class=" text-2xl text-black md:text-4xl font-bold text-center">
                Hey! 
            </p>
            <p class="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
                I'm a passionate <b class="text-black">Frontend Developer</b> (for React and React Native). I love to convert UI design into the real using React. I also love freelancing and working on open source projects.
            </p>
            <ScrollIntoView selector="#skills">
                <div class="mx-auto p-20 hover: cursor-pointer">
                    <FaChevronDown class="animate-bounce mx-auto text-3xl text-black"/>
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About
