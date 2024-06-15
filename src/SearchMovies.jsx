import  React, { useState } from "react";

export default function SearchMovies(props){
    const [movieTitle, setMovieTitle] = useState("");

    const searchMovie = async (e) => {
        e.preventDefault()
        const url = `https://www.omdbapi.com/?apikey=e10f435e&t=${movieTitle}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            props.addFavourite(data)
        }
        catch(err){
            console.log("error fetching the data: " + err)
        }
    }
    return(
        <div>
            <form onSubmit={searchMovie}>
                <label htmlFor='query'>Movie Title</label>
                <input
                type='text'
                name='query'
                value={movieTitle}
                onChange={(e)=> setMovieTitle(e.target.value)}
                placeholder="Enter a Movie Title"
                role='search'
                />
                <button type='submit'>Search Movie</button>
            </form>
        </div>
    )
}