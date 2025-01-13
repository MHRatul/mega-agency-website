import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiCalendar, FiCompass, FiActivity, FiTruck } from "react-icons/fi";

const services = [
    {
        icon: FiCalendar,
        title: "Customizable Settings",
        description: " We provide a customizable set of services to help you stand out from the competition. You can choose from a wide range of services to help you stand out from the competition.",
    },
    {
        icon: FiCompass,
        title: "Developer-Friendly",
        description: "Our project includes a variety of technologies and tools that are easy to use and integrate with other software systems. We provide a wide range of services to help you stand out from the competition.",
    },
    {
        icon: FiActivity,
        title: "Responsive Design",
        description: "Design and support for responsive design. We provide a wide range of services to help you stand out from the competition.",
    },
    {
        icon: FiTruck,
        title: "Cloud Integration",
        description: "Cloud integration with cloud integration. We provide a wide range of services to help you stand out from the competition.",
    },
]

const Services = () => {
  return (
    <div className='max-w-screen-2xl container bg-white mx-auto py-20 px-5'>
        <HeadingSection heading="Explore our range of prfessional services and solutions" subheading="Services" description="Join our community of creative professionals and
         take your business to the next level. We offer a wide range of services to help you stand out from the competition. We provide a wide range of services to help you stand out from the competition. You can choose from a wide range
         of services to help you stand out from the competition. We provide a wide range of services to help you stand out from the competition"/>

         {/* services Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:w-4/5 mx-auto gap-8 mb-16">
            {
                services.map((service, index) =>(
                       <div key={index} className='flex flex-col items-center text-center bg-white shadow-lg rounded-lg
                       p-6 hover:rounded-md hover:shadow-xl transition cursor-pointer'>
                           <service.icon className='text-4xl text-blue-600 mb-4'/>
                           <p className='text-gray-600 mt-2 md:px-10'>{service.description}</p>
                       </div>
                    ))
           }
        </div>
    {/* button */}
     <div className='flex justify-center'>
         <button className='bg-blue-600 text-white py-3 px-8 rounded-md  hover:bg-blue-700 transition'>Explore more</button>
     </div>
    </div>

  )
}

export default Services