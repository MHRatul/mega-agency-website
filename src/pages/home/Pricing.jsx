import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <div className='section-container'>
        <HeadingSection heading="Choose Your Plan" subheading="Pricing" description=" Our Pricing plans are designed to meet your needs and budget.Choose a
        plan that works for you"/>

        {/* {Toggle button} */}
        <div  className='text-center mb-10'>
            <label className='inline-flex  items-center cursor-pointer'>
                <span className='mr-3 text-lg text-gray-600'>
                    {isYearly ? 'Yearly Pricing' : 'Monthly Pricing'}
                </span>
                <div className='relative'>
                    <input type='checkbox' checked={isYearly} onChange={() => setIsYearly(!isYearly)} className='sr-only'/>
                    <div className='toggle-bg w-14 h-8 rounded-full bg-gray-300'></div>
                    <div className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300     ${isYearly ? 'transform translate-x-6' : 'translate-x-0'}`}></div>
                </div>
            </label>
        </div>
    </div>
  )
}

export default Pricing