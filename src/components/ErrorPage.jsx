import React from 'react'

import errorIcon from '../assets/rocket-icon.png'

const ErrorPage = ({message ="Page not found", code = 404}) => {
  return (
    <div className='flex flex-col justify-center text-center items-center  min-h-screen space-y-5'>
        <img src={errorIcon} alt='404' className='w-1/2' />
        <h1 className='text-3xl font-bold text-gray-800'>{message}</h1>
        <p className='text-gray-600'>Error Code: {code}</p>
    </div>
  )
}

export default ErrorPage