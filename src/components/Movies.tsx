import React from "react";

interface Movie {
    id: number;
    title: string;
    poster: string;
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Avengers: Endgame",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2NjY5Nl5BMl5BanBnXkFtZTgwODE4NTMwNzM@._V1_.jpg",
    },
    {
        id: 2,
        title: "Spider-Man: No Way Home",
        poster: "https://m.media-amazon.com/images/M/MV5BMjY0YjMyNzktNjI0Yy00ZjE2LWI5ZDEtY2YxOTJlOTQ0Y2JmXkEyXkFqcGc@._V1_.jpg",
    },
    {
        id: 3,
        title: "Inside Out 2",
        poster: "https://m.media-amazon.com/images/M/MV5BZWYwNWFmOGEtZGM2MS00ZjYzLWEzYmEtNzgxNTY2OGJiMjdiXkEyXkFqcGc@._V1_.jpg",
    },
];

const Movies: React.FC = () => {
    return (
        <section id="movies" className="w-full bg-gray-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-10">Now Showing</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition transform cursor-pointer">
                            <img src={movie.poster} alt={movie.title} className="w-full h-80 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Movies;
