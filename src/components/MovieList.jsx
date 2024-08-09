import React, { useEffect, useState } from "react";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://dummyapi.online/api/movies')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setMovies(data);
            })
    });

    return (
        <>
            {
                movies.map(movie => (
                    <button className="movie-item" >{movie.movie}</button>
                ))
            }
        </>
    )
}

export default React.memo(MovieList);