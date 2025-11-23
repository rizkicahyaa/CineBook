import React from "react";

const Heroes: React.FC = () => {
    return (
        <section className="w-full h-screen bg-gray-900 text-white flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Pesan Tiket Bioskop Dengan Mudah & Cepat</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">Temukan film favoritmu dan booking tiket hanya dalam beberapa klik.</p>
                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-xl transition-all shadow-lg">Mulai Booking</button>
            </div>
        </section>
    );
};

export default Heroes;
