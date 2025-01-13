import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FaApple, FaGoogle, FaAmazon, FaFacebook, FaYoutube } from "react-icons/fa";


    const CompanyLogos = ()=> {
        const logos =[
            { icon: FaApple, name: "Apple"},
            { icon: FaGoogle, name: "Google"},
            { icon: FaAmazon, name: "Amazon"},
            { icon: FaFacebook, name: "Facebook"},
            { icon: FaYoutube, name: "Youtube"},
        ]

  return (
    <div className='bg-colorBg'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <HeadingSection heading="Trusted by Leading Companies" subheading="Our Trusted Partners" description =" Join our community of creative professionals and take your business
            to the next level."/>

            {/* Logo container */}
            <div className='relative overflow-hidden border-y-[1px] p-6'>
                <div className='flex items-center justify-around md:space-x-14 space-x-8 animate-scroll'>
                    {
                        logos.map((Logo, index) =>(
                            <div key={index} className='flex justify-center items-center bg-white rounded-full p-4 h-20 w-20 hover:scale-110 transition transform'>
                                <Logo.icon className='text-3xl text-blue-600 mb-4' title={Logo.name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default CompanyLogos