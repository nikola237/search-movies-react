import React, { useCallback, useEffect } from 'react'

//api
import { apiKey } from '../../api/moviedb'
import moviedbApi from '../../api/moviedb'

//context
import { useMovies, useCategories, useSearch } from '../../context/movies.provider';


//hooks
import useDebounce from '../../hooks/useDebounce';

//components
import Menu from '../../components/Menu/Menu'
import Search from '../../components/Search/Search'
import Cards from '../../components/Cards/Cards'

//mui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './Homepage.styles';
import { makeStyles } from '@mui/styles';


const useHomepageStyles = makeStyles(styles)

const Homepage = () => {
    const { categories } = useCategories()
    const { setMovies } = useMovies()
    const { searchValue } = useSearch()
    const debouncedValue = useDebounce(searchValue, 1000)
    const classes = useHomepageStyles()


    const updateResponse = useCallback((movies) => movies.map(({ vote_average, overview, title, poster_path, }) => ({ vote_average, overview, title, poster_path, favorite: false })), [])




    useEffect(() => {
        const [{ category }] = categories.filter(category => category.selected)
        if (searchValue.length === 0) {

            const getCategory = async () => {

                const response = await moviedbApi.get(`/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`)

                if (response.data.results) {
                    const updated = updateResponse(response.data.results)
                    setMovies(updated)
                }


            }
            getCategory()
        }


    }, [categories, searchValue.length, setMovies, updateResponse])



    useEffect(() => {
        if (debouncedValue) {

            const getMoviesSearch = async () => {
                const response = await moviedbApi.get(`/3/search/movie?query=${debouncedValue}&api_key=${apiKey}`)
                if (response.data.results) {
                    const updated = updateResponse(response.data.results)
                    setMovies(updated)
                }
            }
            getMoviesSearch()

        }
    }, [debouncedValue, setMovies, updateResponse])


    return (
        <Box className={classes.container} >
            <CssBaseline />
            <Menu />
            <Search />
            <Cards />
        </Box>
    )
}

export default Homepage