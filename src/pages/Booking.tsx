import React, { useState } from "react";

const Booking: React.FC = () => {
    const [name, setName] = useState("");
    const [movie, setMovie] = useState("");
    const [seat, setSeat] = useState("");
    const [showDetail, setShowDetail] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowDetail(true);
    };

    return (
        <section id="booking" className="w-full bg-gray-900 text-white py-20 px-6">
            <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Booking Tiket</h2>

                {!showDetail ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2">Nama Pemesan</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none" />
                        </div>

                        <div>
                            <label className="block mb-2">Pilih Film</label>
                            <select value={movie} onChange={(e) => setMovie(e.target.value)} required className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none">
                                <option value="">-- pilih film --</option>
                                <option>Avengers: Endgame</option>
                                <option>Spider-Man: No Way Home</option>
                                <option>Inside Out 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2">Nomor Kursi</label>
                            <input type="text" value={seat} onChange={(e) => setSeat(e.target.value)} required placeholder="contoh: A12" className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none" />
                        </div>

                        <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-xl">
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold">Detail Tiket</h3>

                        <p>
                            <strong>Nama:</strong> {name}
                        </p>
                        <p>
                            <strong>Film:</strong> {movie}
                        </p>
                        <p>
                            <strong>Kursi:</strong> {seat}
                        </p>

                        <button onClick={() => setShowDetail(false)} className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl">
                            Pesan Lagi
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Booking;
