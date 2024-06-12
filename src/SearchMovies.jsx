import  { useState } from "react"

function SearchMovies(){
    const [movieTitle, setMovieTitle] = useState('')
    const searchMovie = async (e) => {
        e.preventDefault()
        const url = `https://www.omdbapi.com/?apikey=9ea76b57=${movieTitle}`
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <form>
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

export default SearchMovies()