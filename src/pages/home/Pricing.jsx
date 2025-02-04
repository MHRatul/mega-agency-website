import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <div className='section-container'>
        <HeadingSection heading="Choose Your Plan" subheading="Pricing" description=" Our Pricing plans are designed to meet your needs and budget.Choose a
        plan that works for you"/>

        {/* {Toggle button} */}
        <div>
            <label className='inline-flex  items-center cursor-pointer'>
                <span className='mr-3 text-lg text-gray-600'>
                    {isYearly ? 'Yearly Pricing' : 'Monthly Pricing'}
                </span>
            </label>
        </div>
    </div>
  )
}

export default Pricing