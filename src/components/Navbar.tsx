import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">CineBook</h1>

                <ul className="hidden md:flex space-x-8 text-lg">
                    <li className="cursor-pointer hover:text-yellow-400">Home</li>
                    <li className="cursor-pointer hover:text-yellow-400">Movies</li>
                    <li className="cursor-pointer hover:text-yellow-400">Booking</li>
                    <li className="cursor-pointer hover:text-yellow-400">About</li>
                </ul>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
                </button>
            </div>

            {open && (
                <ul className="md:hidden bg-gray-800 w-full px-6 pb-4 space-y-4 text-lg">
                    <li className="cursor-pointer hover:text-yellow-400">Home</li>
                    <li className="cursor-pointer hover:text-yellow-400">Movies</li>
                    <li className="cursor-pointer hover:text-yellow-400">Booking</li>
                    <li className="cursor-pointer hover:text-yellow-400">About</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
