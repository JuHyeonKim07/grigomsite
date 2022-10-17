import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loader.css'

export default function Loader() {
    return (
        <Box className='loader'>
            <CircularProgress size={150} />
        </Box>
    );
}