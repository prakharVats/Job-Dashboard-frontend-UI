import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Drafts = () => {
  return (
    <Box padding={2}>
        <Stack direction="row" padding={2} bgcolor="#bfbfbf" borderRadius={1}>
        <Typography fontWeight="bold">
        Saved Items : 51
        </Typography> 
        </Stack>
    </Box>
  )
}

export default Drafts