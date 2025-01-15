import React from "react";
import { Link } from "react-router";
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

const Navbar = () => {
    return (
        <div className="navbar max-w-screen-2xl container mx-auto bg-white px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li><Link>Web Design</Link></li>
                                <li><Link>App Development</Link></li>
                                <li><Link>UI/UX Design</Link></li>
                                <li><Link>Digital Marketing</Link></li>
                            </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold flex item-center">
                    <img src="/logo.png" alt="" />
                    <span className="ml-2 text-[#697077] hidden sm:block">MegaCode</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold from-neutral-400">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li><Link>Web Design</Link></li>
                                <li><Link>App Development</Link></li>
                                <li><Link>UI/UX Design</Link></li>
                                <li><Link>Digital Marketing</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link to="/login" className="bg-transparent border border-blue-600 text-blue-600 py-3 px-4 rounded-md
                          hover:bg-blue-600 hover:text-white transition">Log In</Link>
                <Link to="/pricing" className="bg-blue-600 text-white py-3 px-4 rounded-md flex justify-center items-center hover:bg-blue-700 transition">Start Free Trial</Link>
            </div>
        </div>
    );
};

export default Navbar;
