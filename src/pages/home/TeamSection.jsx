import React from 'react'
import HeadingSection from '../../components/HeadingSection'

import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";


const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];

const TeamSection = () => {
  return (
    <div className='bg-colorBg'>
        < div className='section-container'>
            <HeadingSection heading="Meet Our Team" subheading="Our Team" description=""/>

            {/* Team member cards */}
            <div className='flex flex-wrap justify-center'>
                {
                    teamMembers.map((member) => (
                        < key={member.id} className='md:w-1/4 w-1/2 sm:w-1/2 p-4 '>
                            <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer '>
                                <img src={member.image} alt={member.name} className='w-full h-48 object-cover hover:scale-105 transition transform' />
                                <div className='p-5'>
                                    <h3 className='text-lg font-bold text-gray-800 mb-2'>{member.name}</h3>
                                    <p className='text-sm text-blue-500 font-medium uppercase mb-2'>{member.role}</p>
                                </div>
                                <div className='flex flex-row items-center justify-center space-x-4 mb-4'>
                                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 transition'>
                                        <FaLinkedinIn className='text-2xl' />
                                    </a>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 transition'>
                                        <FaTwitter className='text-2xl' />
                                    </a>
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 transition'>
                                        <FaInstagram className='text-2xl' />
                                    </a>
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800 transition'>
                                        <FaFacebookF className='text-2xl' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))

                }
           </div>
        </div>
    </div>


  )
}

export default TeamSection