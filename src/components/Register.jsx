import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-gray-800 text-center'>Please Register</h2>

            {/* Registration form */}
            <form className='space-y-4'>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-600'>Email:</label>
                    <input type="email" className={`w-full p-2 px-4 focus:outline-none focus:ring-2 border rounded-md`} />
                </div>
                <div>
                    <label className='block mb-2 text-sm font-medium text-gray-600'>Password:</label>
                    <input type="password" className={`w-full p-2 px-4 focus:outline-none focus:ring-2 border rounded-md`} />
                </div>
                <button type='submit' className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>Sign Up</button>
            </form>

                            {/* social login */}

                            <div className='text-center space-y-4'>
                    <p className='text-gray-600'>Or sign-up with</p>

                    <div className='flex flex-col sm:flex-row  justify-center  gap-4'>
                        <button onClick={handleGoogleLogin} className='flex w-full  items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600'>
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button className='flex w-full items-center px-4 py-2 space-x-2 text-white bg-gray-800 rounded hover:bg-gray-900'>
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                        <button className='flex w-full
                         items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                            <FaFacebook />
                            <span>Facebook</span>
                        </button>
                    </div>
                </div>

                <p className='text-sm text-center text-gray-600'>Have an account? Please <Link to="/login" className='text-blue-600 hover:underline'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register