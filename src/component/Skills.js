import React from 'react';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {RiReactjsFill} from 'react-icons/ri';
import {SiJavascript, SiRedux, SiStyledcomponents, SiTailwindcss } from 'react-icons/si';



function Skills() {
    return (
        <div  className="max-w-4xl mx-auto justify-center py-12" id="skills">
           <div data-aos="fade-down" data-aos-duration="800">
           <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
                Tech I Use
            </p>
           </div>
            <div className="flex flex-wrap justify-center pt-2">
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-white sm:text-black animate-bounce font-bold font-mono mt-2">React Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <RiReactjsFill className="text-teal-500 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">React Native</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <img className="bg-white rounded-full w-12 h-12" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642335238/Avatar/next_js_logo_icon_145038_vn5fag.png" alt=""/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Next Js</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <SiJavascript className="text-yellow-500 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Javascript</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                <img className="w-12 h-12" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642350403/Avatar/mascot_firebase-logo_ma5fxk.png" alt=""/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Firebase</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <FaNodeJs className="text-green-700 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Node Js</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <SiRedux className="text-purple-700 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Redux</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <img className="w-12 h-12" src="https://res.cloudinary.com/dqmlanbbj/image/upload/v1642336157/Avatar/Figma-logo_mtlo1v.svg" alt=""/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Figma</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <FaHtml5 className="text-orange-700 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Html</span>
                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <FaCss3Alt className="text-blue-900 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">CSS</span>
                </div>
                <div data-aos="flip-left" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <SiTailwindcss className="text-teal-300 text-9xl"/>
                    <span className="text-white sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Tailwind css</span>

                </div>
                <div data-aos="flip-right" className="flex flex-col w-40 h-40 p-10 m-6 overflow-hidden items-center bg-black sm:bg-white shadow-2xl rounded-lg">
                    <SiStyledcomponents className="text-pink-400 text-9xl"/>
                    <span className="text-white  sm:text-black whitespace-nowrap animate-bounce font-bold font-mono mt-2">Styled Components</span>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Skills
