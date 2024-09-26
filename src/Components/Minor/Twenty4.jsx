import { Box, Stack, Typography } from '@mui/material'
import demoImg from "../../../public/demo.webp"
import React from 'react'

const Twenty4 = () => {
  return (
    <Box sx={{boxShadow: "5px 5px 15px rgba(0.3, 0, 0, 0.3)" , p:"20px"}}>
      <Typography fontWeight="bold">
        Last 24 hrs update
      </Typography>
      <Stack direction="row" spacing={2} sx={{backgroundColor:"#bfbfbf" , p:"10px" , borderRadius:"5px" , mt:"20px"}}>
        <Typography>
          We are looking for a fullstack developer - fulltime - 42 Lpa in Pune ... <a style={{color:"black" , cursor:"pointer" , fontWeight:"bold"}}>more</a> 
        </Typography>
        <img src = {demoImg} style={{height:"60px" , borderRadius:"5px"}}/>
      </Stack>
    </Box>
  )
}

export default Twenty4