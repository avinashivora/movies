import { useState } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';
import FavouritesList from './FavouritesList';

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (movie) => {
    setFavourites([...favourites, movie]);
  }

  console.log(favourites);

  return (
    <div className="App">
      <SearchMovies addFavourite={addFavourite}/>
      <FavouritesList favourites={favourites}/>
    </div>
  );
}

export default App;
