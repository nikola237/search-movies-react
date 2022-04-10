//context
import { useFavorites, useMovies } from '../../context/movies.provider';


//routes
import { routes } from '../../routes/routes'

//mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import styles from './Card.styles';
import { makeStyles } from '@mui/styles';

const useCardStyles = makeStyles(styles)


const CustomCard = ({ vote_average, overview, title, poster_path, favorite, index, path }) => {
    console.log(path)
    const { favorites, setFavorites } = useFavorites()
    const { movies, setMovies } = useMovies()
    const classes = useCardStyles()


    const handleFavorite = (cardId) => {
        const copyMovies = [...movies]

        if (path === routes.homepage) {
            copyMovies[cardId].favorite = !favorite
            setMovies(copyMovies)
            const [findFavorite] = movies.filter((_, i) => i === cardId).map(movie => ({ ...movie, favorite: true }))
            if (favorites.some(movie => movie.title === findFavorite.title)) return

            setFavorites(prev => [...prev, findFavorite])
        }

        if (path === routes.favorite) {
            const removeFavorite = favorites.filter((_, i) => i !== cardId)
            setFavorites(removeFavorite)
        }

    }


    return (
        <Card sx={{ maxWidth: 330, height: '100%', position: 'relative' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"

                    image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {overview}
                    </Typography>
                </CardContent>


                <Typography gutterBottom variant="h5" component="div">
                    {vote_average}
                </Typography>
            </CardActionArea>
            <CardActions>


                <Button style={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color='primary' size='small' variant='outlined' onClick={() => handleFavorite(index)} sx={{ position: 'absolute', bottom: 0 }}>
                    {path === routes.homepage ? <AddIcon /> : null}
                    <Typography>
                        {path === routes.homepage ? 'Add' : 'Remove'}
                    </Typography>
                </Button>

            </CardActions>
        </Card>
    )
}

export default CustomCard;