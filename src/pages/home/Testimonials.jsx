import React from 'react'
import HeadingSection from '../../components/HeadingSection'

// const reviews = [
//     {
//         id: 1,
//         logo: "/logos/logo1.png",
//         review:
//             "This platform has revolutionized my business. It's easy to use and has a wide range of features that help me grow my business. I highly recommend it.",
//         author: "John Doe",
//         role: "CEO, TechCrop",
//     },
//     {
//         id: 2,
//         logo: "/path-to-logo-2.png",
//         review:
//             "I've been using this platform for a while now and it has helped me grow my business. The support team is very helpful and responsive.",
//         author: "Jane Smith",
//         role: "Marketing Lead, Bizsoft"
//     },
//     {
//         id: 3,
//         logo: "/path-to-logo-3.png",
//         review:
//             "Amazing experience! This user-friendly platform has made my job easier and more efficient. Highly recommended!",
//         author: "Mark Jing",
//         role: "Project Manager, CloudNet"
//     },
//     {
//         id: 4,
//         logo: "/path-to-logo-4.png",
//         review:
//             "Their platform is a game-changer for my business. It's easy to use and has a wide range of features that help me grow my business.",
//         author: "Ashley Johnson",
//         role: "CTO, MagicTech"
//     }
// ]

const Testimonials = () => {
    return (
        <div className='bg-colorBg'>
            <div className='section-container'>
                <HeadingSection heading="What Our Clients Say" subheading="Testimonials" description="Join our community of creative
             professionals and take your business to the next level."/>

                {/* Testimonials carousel */}

                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>This platform has revolutionized my business. It`s easy to use and has a wide range of features
                                        that help me grow my business. I highly recommend it.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                          <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                          <p className='text-sm text-gray-600'>CEO, TechCrop</p>
                                    </div>
                            </div>
                            <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I`ve been using this platform for a while now and it has helped me grow my business.
                                    The support team is very helpful and responsive.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                          <h3 className='text-lg font-bold text-gray-800'>Smith Shane</h3>
                                          <p className='text-sm text-gray-600'>Marketing Lead, Bizsoft</p>
                                    </div>
                            </div>
                            {/* <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" /> */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
                        <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>This platform has revolutionized my business. It`s easy to use and has a wide range of features
                                        that help me grow my business. I highly recommend it.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                          <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                          <p className='text-sm text-gray-600'>CEO, TechCrop</p>
                                    </div>
                            </div>
                            <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I`ve been using this platform for a while now and it has helped me grow my business.
                                    The support team is very helpful and responsive.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                          <h3 className='text-lg font-bold text-gray-800'>Smith Shane</h3>
                                          <p className='text-sm text-gray-600'>Marketing Lead, Bizsoft</p>
                                    </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
                        <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/authors/author3.png"
                                    className="size-14 mx-auto my-2 mt-6 object-contain" />
                                    <p className='text-gray-600 italic mt-16 md:w-3/5 mx-auto'>Amazing experience! This user-friendly platform has made my job easier and
                                    more efficient. Highly recommended!</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>M</div>
                                          <h3 className='text-lg font-bold text-gray-800'>Megan Jackson</h3>
                                          <p className='text-sm text-gray-600'>COO, MeganTech</p>
                                    </div>
                            </div>
                            <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>I`ve been using this platform for a while now and it has helped me grow my business.
                                    The support team is very helpful and responsive.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                          <h3 className='text-lg font-bold text-gray-800'>Smith Shane</h3>
                                          <p className='text-sm text-gray-600'>Marketing Lead, Bizsoft</p>
                                    </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item md:space-x-8 relative w-full">
                        <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/authors/author1.png"
                                    className="size-14 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mt-6 mb-4 md:w-3/5 mx-auto'>This platform has revolutionized my business. It`s easy to use and has a wide range of features
                                        that help me grow my business. I highly recommend it.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                          <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                          <p className='text-sm text-gray-600'>CEO, TechCrop</p>
                                    </div>
                            </div>
                            <div className='md:w-1/2 bg-white shadow md:p-8 p-4 rounded-md'>
                                <img
                                    src="/images/authors/author2.png"
                                    className="size-14 mx-auto my-2 object-contain" />
                                    <p className='text-gray-600 italic mt-6 mb-4 md:w-3/5 mx-auto'>I`ve been using this platform for a while now and it has helped me grow my business.
                                    The support team is very helpful and responsive.</p>
                                    <div className='flex flex-col items-center space-y-2'>
                                        <div className='size-10 rounded-full bg-blue-100 flex
                                          items-center justify-center text-blue-600 text-2xl font-bold'>P</div>
                                          <h3 className='text-lg font-bold text-gray-800'>Polard Bay</h3>
                                          <p className='text-sm text-gray-600'>CEO, UrbanTech</p>
                                    </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials