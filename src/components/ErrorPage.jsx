import React from 'react'
import ErrorImage from '../assets/errorImage.png'
import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: '24px'}}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: '24px'}}>
            <Box sx={{height: '240px'}} component='img' src={ErrorImage}/>
            <Typography sx={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: '#3b3b3b'}}>Sorry, We couldn't find the city.</Typography>
        </Box>
    </Box>
  )
}

export default ErrorPage