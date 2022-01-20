import React from 'react';
import {FaDownload, FaGithub, FaLinkedinIn, } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

function Footer() {
    return (
        <div >
            <footer class="py-5 bg-black rounded-lg sm:bg-white shadow-xl drop-shadow-lg">
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
                  <a class="text-3xl text-red-800 hover: cursor-pointer" href="mailto:me.iamzaidbinarshad@gmail.com">
                        <SiGmail/>
                    </a>
                  </div>
                  <div class="flex items-center justify-center bg-white rounded-full w-10 h-10 hover:bg-lime-200">
                  <a class="text-2xl text-lime-800 hover: cursor-pointer" href="https://drive.google.com/file/d/1O2VwSqK05i_XgC-a5q7nv2y0L-ZD3msN/view?usp=sharing">
                        <FaDownload className="animate-bounce"/>
                    </a>
                  </div>
                </div>

                <div class="flex justify-center mt-4">
                    <span class="text-white sm:text-black">Made with 💙 <b>Zaid Jamal</b></span>
                </div>
        </footer>
        </div>
    )
}

export default Footer
