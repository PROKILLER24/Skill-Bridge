// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for the category grid
const categories = [
    { name: 'Plumbing & Repair', icon: '🔧', color: 'bg-blue-100', skill: 'Plumbing' },
    { name: 'Electrical Work', icon: '⚡', color: 'bg-yellow-100', skill: 'Electrician' },
    { name: 'Home Cleaning', icon: '🧼', color: 'bg-green-100', skill: 'Cleaning' },
    { name: 'Carpentry & Renovation', icon: '🔨', color: 'bg-red-100', skill: 'Carpentry' },
    { name: 'Driver & Delivery', icon: '🚚', color: 'bg-purple-100', skill: 'Delivery' },
    { name: 'Automotive Repair', icon: '🚗', color: 'bg-indigo-100', skill: 'Mechanic' },
    { name: 'Gardening & Landscaping', icon: '🌳', color: 'bg-lime-100', skill: 'Gardening' },
    { name: 'Security & Helper', icon: '🛡️', color: 'bg-orange-100', skill: 'Security Guard' },
];

const HomePage = () => {
    const navigate = useNavigate();

    // Handles the form submission for the main search bar
    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.elements.search.value;
        // Navigate to the search results page with the query
        if (searchTerm) {
            navigate(`/search?query=${searchTerm}`);
        }
    };

    // Handles click on a category card
    const handleCategoryClick = (skill) => {
        // Navigate to the search results page filtered by the specific skill
        navigate(`/search?skill=${skill}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 1. Hero Section and Search Bar */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 shadow-lg">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                        SkillBridge: Bridging Blue-Collar Talent
                    </h1>
                    <p className="text-xl text-blue-200 mb-8">
                        Find verified, local workers for any service, or find your next reliable job.
                    </p>
                    
                    {/* The main search form */}
                    <form onSubmit={handleSearch} className="flex bg-white rounded-lg shadow-xl p-2 max-w-xl mx-auto">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search for skills (e.g., Electrician, Maid Service, Plumber)"
                            className="flex-grow p-3 text-gray-700 rounded-l-lg focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-r-lg transition duration-300 flex items-center justify-center"
                        >
                            <span className="mr-2">🔎</span> Find Services
                        </button>
                    </form>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {/* 2. Featured Categories Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        Popular Categories
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.name}
                                onClick={() => handleCategoryClick(category.skill)}
                                className={`p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${category.color} border-b-4 border-gray-300 flex flex-col items-center text-center`}
                            >
                                <p className="text-4xl mb-3">{category.icon}</p>
                                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                                <p className="text-sm text-gray-600">Find jobs or workers.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Call to Action / Trust Section */}
                <section className="grid md:grid-cols-2 gap-8 mt-16">
                    
                    {/* Worker CTA: Focusing on Structure and Trust */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                           <span className="text-3xl mr-3 text-green-600">💪</span> I am a Worker
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Establish **trust** and **structure**! Create a verified profile, get access to local jobs, and manage your earnings reliably. Join the movement to formalize the blue-collar market.
                        </p>
                        <button 
                            onClick={() => navigate('/signup?role=worker')}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Start Earning Today
                        </button>
                    </div>

                    {/* Client CTA: Focusing on Verified Services */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-500">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <span className="text-3xl mr-3 text-indigo-600">🤝</span> I need a Service
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Find **verified, local talent** quickly. View transparent ratings, check prices, and hire with confidence. Post a job for free and get matched instantly.
                        </p>
                        <button
                            onClick={() => navigate('/signup?role=client')}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Post a Job Now
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default HomePage;