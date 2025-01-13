import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import bannerImg from "../../assets/banner.png"

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div className='bg-colorBg'>
            <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
                {/* left side */}
                <div className='lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-7xl font-bold text-gray-800 mb-4'>Creative Web Design For Businesses</h1>
                    <p className='text-md text-gray-600 mb-6'>Join our community of creative professionals and take your business to the next level.
                        We offer a wide range of services to help you stand out from the competition.</p>
                    <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-start'>
                        <button className='bg-blue-600 text-white py-3 px-6 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition'>
                            <span>Get Started</span>
                            <FaArrowRight />
                        </button>
                        <button className='bg-transparent border border-blue-600 text-blue-600 py-3 px-6 rounded-md
                          hover:bg-blue-600 hover:text-white transition'>Contact Us</button>
                    </div>
                </div>

                {/* right side */}
                <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative '>
                   <div className='relative group '>
                    <img src={bannerImg} alt="banner image" className='rounded-lg shadow-lg' />
                    <button onClick={openModal} className='absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0'>
                      <IoPlayCircleOutline className='text-white text-5xl hover:text-red-600'/>
                    </button>
                   </div>
                </div>

                {/* modal */}
                {
                    showModal && (<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                        <div className='bg-white p-4 rounded-lg shadow-lg relative max-w-xl w-full'>
                            <button onClick={closeModal} className='rounded-full absolute top-1 right-1 border-2 w-8 h-8 bg-red-600 border-white text-white hover:bg-red-700 text-2xl translate-x-6 translate-y-[-80%]'> &times;</button>
                            <iframe className='w-full aspect-video' width="540" height="315" src="https://www.youtube.com/embed/w54Hw_sEeR0?si=TtNrqtQHiHf1n866" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className='text-2xl mb-4'>
                                <p className='text-4xl text-gray-800 font-bold mt-5 mb-4'>Welcome to our Agency website!</p>
                                <p className='text-lg italic ... text-gray-500 mb-4'>"Join our community of creative professionals and take your business to the next level."</p>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default HeroSection