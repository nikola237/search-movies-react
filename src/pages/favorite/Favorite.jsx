//components
import Menu from '../../components/Menu/Menu';
import Cards from '../../components/Cards/Cards'


//mui
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import styles from './Favorite.styles';
import { makeStyles } from '@mui/styles';


const useFavoriteStyles = makeStyles(styles)

const Favorite = () => {

    const classes = useFavoriteStyles()
    return (
        <Box className={classes.container} >
            <CssBaseline />
            <Menu />
            <Cards />
        </Box>
    )



}
export default Favorite


