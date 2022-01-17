import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function ContactMe() {
    return (
        <div className="max-w-4xl  text-center m-auto pt-36 pb-10">
            <div data-aos="fade-right" data-aos-duration="500">
            <h1 className="text-2xl sm:text-4xl"><b>Interested in working together ?</b></h1>
            </div>
            <div data-aos="fade-left" data-aos-duration="500">
            <a className="pt-4" href="mailto: iamzaidbinarshad@gmail.com">
                <div className="flex flex-row items-center justify-center w-30 h-10 bg-black sm:bg-white rounded-lg shadow-2xl mt-4">
                    <span className="animate-bounce mr-3 text-white sm:text-black font-semibold text-center">
                        Get in touch
                    </span>
                    <b className="text-white sm:text-black animate-bounce"><FaArrowRight/></b>
                </div>
            </a>
            </div>
        </div>
    )
}

export default ContactMe
