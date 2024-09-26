import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Feed = () => {
  return (
    <Box padding={2}>
        <Stack direction="row" padding={2} bgcolor="#bfbfbf" borderRadius={1}>
          <input placeholder='Search...' style={{borderRadius:"3px" , border:"1px solid black" , padding:"5px" , width:"250px"}}/>
          <Button sx={{fontWeight:"200" , bgcolor:"#121111" , color:"white" , ml:"10px"}}>
            Search
          </Button>
        </Stack>

        <Typography fontWeight="bold" marginTop={4}>
          Latest news update :
        </Typography>


    </Box>
  )
}

export default Feed