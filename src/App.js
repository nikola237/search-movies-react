import React from 'react'
import './App.css'

//router
import {
  Routes,
  Route,
} from "react-router-dom";

//routes
import { routes } from './routes/routes'

//provider
import { MoviesProvider } from './context/movies.provider';

//pages
import Homepage from './pages/homepage/Homepage';
import Favorite from './pages/favorite/Favorite'

function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route exact path={routes.homepage} element={<Homepage />} />
        <Route path={routes.favorite} element={<Favorite />} />
      </Routes>
    </MoviesProvider>
  );
}

export default App;
