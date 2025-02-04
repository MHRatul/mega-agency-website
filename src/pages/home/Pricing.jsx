import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const pricingPlans = [
    {
        name: "Freelancer",
        monthlyPrice: 25,
        yearlyPrice: 250, // 25 * 12
        saves: "$25 USD per month, paid annually",
        features: [
            "1 Project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
        ],
    },
    {
        name: "Professional",
        monthlyPrice: 65,
        yearlyPrice: 650, // 65 * 12
        saves: "$55 USD per month, paid annually",
        features: [
            "5 Projects",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
        ],
    },
    {
        name: "Agency",
        monthlyPrice: 95,
        yearlyPrice: 950, // 95 * 12
        saves: "$95 USD per month, paid annually",
        features: [
            "Unlimited Projects",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration",
        ],
    },
];


const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <div className='section-container'>
        <HeadingSection heading="Choose Your Plan" subheading="Pricing" description=" Our Pricing plans are designed to meet your needs and budget.Choose a
        plan that works for you"/>

        {/* {Toggle button} */}
        <div  className='text-center mb-10'>
            <label className='inline-flex  items-center cursor-pointer'>
                <span className='mr-3 text-lg font-medium text-gray-600'>
                    {isYearly ? 'Yearly Pricing' : 'Monthly Pricing'}
                </span>
                <div className='relative'>
                    <input type='checkbox' checked={isYearly} onChange={() => setIsYearly(!isYearly)} className='sr-only'/>
                    <div className='toggle-bg w-14 h-8 rounded-full bg-gray-300'></div>
                    <div className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 ease-in-out ${isYearly ? 'transform translate-x-6' : 'translate-x-0'}`}></div>
                </div>
            </label>
        </div>

        {/*Pricing Plans */}
    </div>
  )
}

export default Pricing