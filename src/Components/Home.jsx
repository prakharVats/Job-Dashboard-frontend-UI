import { Box, Stack, Typography } from '@mui/material'
import Pie from './Graphs/Pie.jsx'
import Line from './Graphs/LineGraph.jsx'
import Table from "./Minor/Table.jsx"
import Uploads from './Minor/Uploads.jsx'
import Twenty4 from './Minor/Twenty4.jsx'
const border= {
  border:"1px solid black"
}

// const weight = {
//   fontWeight : "bold"
// }

const Home = () => {
  const DummyData = [
    {No : "1" , Company : "Microsoft" , Salary : "42Lpa" , City:"Bengalore" , Type:"On Field"},
    {No : "2" , Company : "Amazon" , Salary : "72Lpa" , City:"NaN" , Type:"Remote"},
    {No : "3" , Company : "Google" , Salary : "1.2Cr" , City:"Pune" , Type:"On Field"},
  ]
  const TitleData = [{No : "S/n" , Company : "Company" , Salary : "Salary" , City:"City" , Type:"Type"},]
  return (
    <Box sx={{height:"200vh" , pt:"10px"}}>
        <Stack direction="row">
          {/* Github activity */}
          <Box sx={{height:"300px" , width:"600px" , p:"10px" }}>
            <Line/>
          </Box>
          {/* Uploads */}
          <Box sx={{height:"300px" , width:"600px"}}>
            <Uploads/>
          </Box>  
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mt:"20px" , p:"20px"}}>
          <Twenty4/>
          <Table/>
        </Stack>
    </Box>
  )
}

export default Home