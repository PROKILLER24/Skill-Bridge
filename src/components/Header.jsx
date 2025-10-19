
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // This state will be managed by an Auth Context later
    const isAuthenticated = false; // Mock for now

    return (
        <nav className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    
                    {/* Logo/App Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition duration-150">
                            SkillBridge
                        </Link>
                    </div>

                    {/* Desktop Navigation Links (Center) */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                        <Link 
                            to="/" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-indigo-500 transition duration-150"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/search" 
                            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-indigo-500 transition duration-150"
                        >
                            Browse Services
                        </Link>
                    </div>

                    {/* Auth Buttons/User Profile (Right) */}
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <Link 
                                to="/dashboard" 
                                className="ml-4 p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition duration-150 font-medium"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex space-x-3">
                                <Link 
                                    to="/login" 
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition duration-150 py-2 px-3"
                                >
                                    Log In
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-150 shadow-md"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;