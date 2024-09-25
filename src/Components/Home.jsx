import { Box, Stack, Typography } from '@mui/material'
import Pie from './Graphs/Pie.jsx'
import Line from './Graphs/LineGraph.jsx'
const Home = () => {
  return (
    <Box sx={{height:"200vh"}}>
        <Stack direction="row">
          <Line/>
        </Stack>
    </Box>
  )
}

export default Home