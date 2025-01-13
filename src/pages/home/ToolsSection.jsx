import React from 'react'
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";

const tools = [
    {
        icon: FiSettings,
        title: "Customizable Settings",
        description: "Easily configure your website to match your brand identity and preferences."
    },
    {
        icon: FiCode,
        title: "Developer-Friendly",
        description: "Optimized for developers with clean interface design"
    },
    {
        icon: FiSmartphone,
        title: "Responsive Design",
        description: "Works seamlessly on all devices, including desktops, tablets, and smartphones."
    },
    {
        icon: FiCloud,
        title: "Cloud Integration",
        description: "Connect your website to your cloud services for easy management and deployment."
    },
]

const ToolsSection = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        {/* Heading section */}
        <div className='text-center mb-10'>
            <p className='text-lg text-blue-600 font-semibold uppercase'>The Tools You Need</p>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mt-3'>All-in-One Solution for Your Needs</h2>
        </div>

        {/* render tools card section */}
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16'>
            {
                tools.map((tool, index) => (
                    <div key={index} className='flex flex-col text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition items-center cursor-pointer'>
                            {/* icon */}
                            <tool.icon className='text-4xl text-blue-600 mb-4'/>
                            <h3 className='text-lg font-bold text-gray-800'>{tool.title}</h3>
                            <p className=' text-gray-600 mt-2'>{tool.description}</p>
                            <button className='bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition'>Learn More</button>
                    </div>

                ))
            }
        </div>
        {/* button */}
        <div className='flex justify-center'>
         <button className='bg-blue-600 text-white py-3 px-4 rounded-md  hover:bg-blue-700 transition'>Explore more</button>
         </div>
    </div>
  )
}

export default ToolsSection