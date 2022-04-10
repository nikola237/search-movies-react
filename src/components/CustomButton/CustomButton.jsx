import React from 'react'

//context
import { useCategories } from '../../context/movies.provider';


//mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CustomButton = ({ category, index }) => {
    const { categories, setCategories } = useCategories()


    const handleCategory = (index) => {

        if (categories[index].selected) return

        const changeActiveCategory = categories.map((category) => {
            if (category.id === index) {
                return {
                    ...category, selected: true
                }
            }

            return { ...category, selected: false }

        })

        setCategories(changeActiveCategory)
    }

    return (
        <Box sx={{ padding: 1 }}>
            <Button variant="outlined" onClick={() => handleCategory(index)}>{category.category.replace('_', ' ')}</Button>
        </Box>
    )
}

export default CustomButton;