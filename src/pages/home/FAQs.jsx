import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },
    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },
    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },
    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },
    {
        id: 5,
        question: "How can we get in touch?",
        answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
    }
];


const FAQs = () => {
    const [expandFAQ, setExpandFAQ] = useState (null)

    //toogle btn to visible the answer
    const toggleFAQ = (id) => {
      if (expandFAQ === id) {
        return setExpandFAQ(null);
      }else{
        setExpandFAQ(id)
      }

    };
  return (
    <div className='bg-colorBg'>
        <div className='section-container'>
            <HeadingSection heading="Frequently Asked Questions" subheading="FAQs" description="Get answers to frequently
             asked questions about our product and services."/>


             {/* faqs accordian-question section */}
             <div className='w-full max-w-4xl mx-auto'>
                {
                    faqs.map((faq) =>(
                        <div key={faq.id} className='mb-4 border border-gray-200'>
                            <div onClick={() => toggleFAQ(faq.id)}  className='cursor-pointer border-b border-gray-200'>
                            <h3 className='text-lg font-semibold text-gray-800 '>{faq.question}</h3>
                            <span className={`transform transition duration-300 text-lg font-semibold text-gray-800 ease-in-out ${expandFAQ === faq.id ? 'rotate-180' : 'rotate-0'}`}>
                                {expandFAQ === faq.id ? "-"  : '+'}
                            </span>
                           </div>
                        </div>
                    ))
                }

                {/* faqs accordian-answer section */}
                {
                    faqs.map((faq) =>(
                        <div key={faq.id} className={`overflow-hidden transition-all duration-300 ease-in-out ${expandFAQ === faq.id ? 'max-h-full' : 'max-h-0'}`}>
                            <p className='text-gray-600 mt-3'>{faq.answer}</p>
                        </div>
                    ))
                }
             </div>
        </div>
    </div>
  )
}

export default FAQs