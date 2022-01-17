import React from 'react';
import Typewriter from 'typewriter-effect';
import {FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
function Card() {
    return (
        <div class = "w-full">

            <div class = "flex flex-col justify-center  max-w-sm mx-auto sm:bg-white bg-black shadow-lg rounded-lg">
                <div>
                    <img class = "w-40 mx-auto rounded-full shadow-xl drop-shadow-sm my-2"src = "https://i.pinimg.com/564x/de/52/b7/de52b7bd3fbd77d5ca765bb6c40b3eb0.jpg" alt=""/>
                </div>
                <div class="text-center my-2 text-white sm:text-black text-2xl font-sans">
                <Typewriter
  options={{
    strings: ['ZAID JAMAL '],
    autoStart: true,
    loop: true,
  }}
/>
                </div>

                <div class="text-center my-2 text-white sm:text-black text-base font-sans">
                    <h4>React Frontend Developer/ UI Designer</h4>
                </div>
                <div class="flex justify-center space-x-5 my-2 ">
                   <div class="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-gray-400">
                   <a class="text-3xl  hover: cursor-pointer" href="https://github.com/zaidjamal-op">
                        <FaGithub />
                    </a>
                    
                   </div>
                   <div class="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-blue-200">
                   <a class="text-3xl text-blue-800 hover: cursor-pointer" href="https://www.linkedin.com/in/zaid-jamal-1856b1203/">
                        <FaLinkedinIn/>
                    </a>
                    
                   </div>
                  <div class="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-red-200">
                  <a class="text-3xl text-red-800 hover: cursor-pointer" href="mailto: iamzaidbinarshad@gmail.com">
                        <SiGmail/>
                    </a>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
