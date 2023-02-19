import { Typography, Box } from '@mui/material'
import React from 'react'
import Drop from '../assets/drop.png'
import Rain from '../assets/rain.png'
import Thermometer from '../assets/thermometer.png'
import Tornado from '../assets/tornado.png'

const Widgets = ({temp, feelsLike, humidity, wind}) => {
  return (
    <Box>
        <Box sx={{mt: "24px"}}>
            <Box sx={{display: 'flex', my: '24px', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', width: '200px', backgroundColor: 'white', padding: '16px', borderRadius: '24px', mx: '12px', alignItems: 'center'}}>
                <Box component='img' src={Thermometer} sx={{width: '42px', height: '42px', mr: '12px'}}/>

                <Box>
                    <Typography sx={{fontWeight: 'bold', color: '#3b3b3b', fontSize: '14px'}}>
                    {Math.round(temp - 273.15)}.0 °C
                    </Typography>
                    <Typography sx={{color: '#696969', fontSize: '14px'}}>
                        Temp
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display: 'flex', width: '200px', backgroundColor: 'white', padding: '16px', borderRadius: '24px', mx: '12px', alignItems: 'center'}}>
                <Box component='img' src={Rain} sx={{width: '42px', height: '42px', mr: '12px'}}/>

                <Box>
                    <Typography sx={{fontWeight: 'bold', color: '#3b3b3b', fontSize: '14px'}}>
                    {Math.round(feelsLike - 273.15)}.0 °C
                    </Typography>
                    <Typography sx={{color: '#696969', fontSize: '14px'}}>
                       FeelsLike
                    </Typography>
                </Box>
            </Box>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', width: '200px', backgroundColor: 'white', padding: '16px', borderRadius: '24px', mx: '12px', alignItems: 'center'}}>
                <Box component='img' src={Drop} sx={{width: '42px', height: '42px', mr: '12px'}}/>

                <Box>
                    <Typography sx={{fontWeight: 'bold', color: '#3b3b3b', fontSize: '14px'}}>
                        {humidity}%
                    </Typography>
                    <Typography sx={{color: '#696969', fontSize: '14px'}}>
                        Humidity
                    </Typography>
                </Box>
            </Box>

            <Box sx={{display: 'flex', width: '200px', backgroundColor: 'white', padding: '16px', borderRadius: '24px', mx: '12px', alignItems: 'center'}}>
                <Box component='img' src={Tornado} sx={{width: '42px', height: '42px', mr: '12px'}}/>

                <Box>
                    <Typography sx={{fontWeight: 'bold', color: '#3b3b3b', fontSize: '14px'}}>
                        {Math.round(wind * 3.6)} km/h
                    </Typography>
                    <Typography sx={{color: '#696969', fontSize: '14px'}}>
                        Wind
                    </Typography>
                </Box>
            </Box>
            </Box>
            
        </Box>
    </Box>
  )
}

export default Widgets