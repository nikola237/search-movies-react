//context
import { useMovies, useFavorites } from '../../context/movies.provider';

//router
import { useLocation } from 'react-router-dom';

//routes
import { routes } from '../../routes/routes'

//components
import CustomCard from '../Card/Card';

//mui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './Cards.styles';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useCardsStyles = makeStyles(styles)

const Cards = () => {

    const { movies } = useMovies()
    const { favorites } = useFavorites()
    const location = useLocation()

    const classes = useCardsStyles()

    const contentForRender = location.pathname === routes.homepage ? movies : favorites
    const updateButtonText = location.pathname === routes.homepage ? 'LOADING' : 'NO FAVORITE MOVIES'

    return (
        <Container maxWidth='xl' justify='center' align='center'>
            <Grid item container spacing={2} >
                {contentForRender.length > 0 ? contentForRender.map((movie, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <CustomCard index={i}  {...movie} path={location.pathname} />
                        </Grid>
                    )
                }) :
                    <Grid item xs={12} >
                        <Box sx={{ color: '#fff' }}>
                        <Typography>{updateButtonText}</Typography>
                        </Box>
                    </Grid>}
            </Grid>
        </Container>
    )
}

export default Cards