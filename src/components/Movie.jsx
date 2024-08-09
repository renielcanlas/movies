import React from "react";

const Movie = (movie) => {
    return (
        {
            if (movie) {
                <h1>movie.movie</h1>
            }
        }
    );
}

export default React.memo(Movie);