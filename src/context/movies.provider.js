import React, { useState, createContext, useContext } from 'react';

export const MoviesContext = createContext()


const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [categories, setCategories] = useState([{ category: 'popular', selected: true, id: 0 },
    { category: 'top_rated', selected: false, id: 1 },
    { category: 'upcoming', selected: false, id: 2 }])


    return (
        <MoviesContext.Provider value={{ movies, setMovies, favorites, setFavorites, categories, setCategories, searchValue, setSearchValue }}>
            {children}
        </MoviesContext.Provider>
    )
}

const useMovies = () => {
    const { movies, setMovies } = useContext(MoviesContext)

    if (movies === undefined) {
        throw new Error('movies state error')
    }
    return { movies, setMovies }
}

const useFavorites = () => {
    const { favorites, setFavorites } = useContext(MoviesContext)
    if (favorites === undefined) {
        throw new Error('favorites state error')
    }
    return { favorites, setFavorites }
}

const useCategories = () => {
    const { categories, setCategories } = useContext(MoviesContext)

    if (categories === undefined) {
        throw new Error('currentApi state error')
    }
    return { categories, setCategories }
}

const useSearch = () => {
    const { searchValue, setSearchValue } = useContext(MoviesContext)
    if (searchValue === undefined) {
        throw new Error('currentApi state error')
    }
    return { searchValue, setSearchValue }
}

export { MoviesProvider, useMovies, useFavorites, useCategories, useSearch }