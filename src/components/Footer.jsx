// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          
          {/* Column 1: App Info */}
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">SkillBridge</h3>
            <p className="text-sm text-gray-400 mb-4">
              Bridging the gap between reliable blue-collar talent and service demand. Establishing structure, trust, and inclusivity.
            </p>
            <div className="flex space-x-4 text-gray-400">
              {/* Mock Social Links */}
              <a href="#" className="hover:text-white transition duration-200">FB</a>
              <a href="#" className="hover:text-white transition duration-200">TW</a>
              <a href="#" className="hover:text-white transition duration-200">LI</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search" className="text-gray-400 hover:text-white">Browse Services</Link></li>
              <li><Link to="/signup?role=worker" className="text-gray-400 hover:text-white">Join as a Worker</Link></li>
              <li><Link to="/jobs/post" className="text-gray-400 hover:text-white">Post a Job</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Trust & Safety (Crucial for SkillBridge) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust & Safety</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/verification-process" className="text-gray-400 hover:text-white">Worker Verification</Link></li>
              <li><Link to="/pricing-transparency" className="text-gray-400 hover:text-white">Pricing Transparency</Link></li>
              <li><Link to="/dispute-resolution" className="text-gray-400 hover:text-white">Dispute Resolution</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support Center</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SkillBridge. All rights reserved. Built for socioeconomic growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;