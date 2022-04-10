import React from 'react'

//context
import { useCategories } from '../../context/movies.provider';

//router
import { useLocation } from 'react-router-dom'

//router
import { useNavigate } from 'react-router-dom'

//compponents
import CustomButton from '../../components/CustomButton/CustomButton';

//mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { routes } from '../../routes/routes';


const Menu = () => {
    const { categories } = useCategories()
    const navigate = useNavigate()
    const location = useLocation()

    const handleChangePage = () => {
        navigate('/favorite')
    }

    const handleGoBack = () => {
        navigate('/')
    }


    return (
        <Box sx={{ width: '100%', minHeight: '80px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', background: 'linear-gradient(90deg, rgba(2,0,36,1) 61%, rgba(20,81,142,1) 89%)', paddingLeft: 6 }}>
            {location.pathname === routes.homepage && <> {categories.map((category, i) =>
                <CustomButton key={i} category={category} index={i} />
            )}
                <Box sx={{ padding: 1 }}>
                    <Button variant="outlined" onClick={handleChangePage}>MY FAVORITE</Button>
                </Box></>}
            {location.pathname === routes.favorite && <>

                <Button variant="outlined" onClick={handleGoBack}>GO BACK</Button>
            </>}

        </Box>
    )
}
export default Menu