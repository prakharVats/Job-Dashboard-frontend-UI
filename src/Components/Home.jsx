import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{height:"200vh"}}>
        <Stack direction="row">
          <Typography>
            hello
          </Typography>
          <Typography>
            world
          </Typography>
        </Stack>
    </Box>
  )
}

export default Home