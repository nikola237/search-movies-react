import React from 'react'

//context
import { useSearch } from '../../context/movies.provider';

//mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Search.styles';
import { makeStyles } from '@mui/styles';

const useSearchStyles = makeStyles(styles)


const Search = () => {
    const { searchValue, setSearchValue } = useSearch()
    const classes = useSearchStyles()

    return <Box sx={{ width: "100%", margin: '20px 0px', backgroundColor: '#181818', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
        <Box sx={{ width: '50%' }}>
            <TextField className={classes.root}
                variant="outlined" label='Search movie' name='movie' autoComplete='off' focused fullWidth size='medium' onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
        </Box>
    </Box>
}
export default Search