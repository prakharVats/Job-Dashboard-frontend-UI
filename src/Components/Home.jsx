import { Box, Stack, Typography } from '@mui/material'
import Pie from './Graphs/Pie.jsx'
import Line from './Graphs/LineGraph.jsx'

const border= {
  border:"1px solid black"
}

// const weight = {
//   fontWeight : "bold"
// }
const Home = () => {
  const RowD = ["S/n" , "Company" , "Salary" , "City" , "Type"];
  const DummyData = [
    {no : "1" , company : "Microsoft" , Salary : "42Lpa" , City:"Bengalore" , Type:"On Field"},
    {no : "2" , company : "Amazon" , Salary : "72Lpa" , City:"NaN" , Type:"Remote"},
    {no : "3" , company : "Google" , Salary : "1.2Cr" , City:"Pune" , Type:"On Field"},
  ]
  return (
    <Box sx={{height:"200vh"}}>
        <Stack direction="row">
          {/* Github activity */}
          <Box sx={{height:"300px" , width:"600px" , p:"20px" }}>
            <Line/>
          </Box>

          {/* Uploads */}
          <Box sx={{height:"300px" , width:"600px" , p:"20px"  , ...border}}>
            {/* first row */}
              <Box bgcolor="#d9d9d9">
              < Drafts head = {1} RowD={RowD}/>
              </Box>

            {/* following rows */}
              {/* Dummy data */}
              {/* <Drafts head = {0} RowD={DummyData}/> */}
          </Box>  
        </Stack>
    </Box>
  )
}
     

const Drafts = ({RowD , head}) =>{
  return <>
  <Stack direction="row" spacing={10} padding={2}>
  {RowD.map(e => <OneRow key={e} text = {e} head = {head}/>)}
  </Stack>
  </>
}

const OneRow = ({text , head}) =>{
  return (
  <Typography sx={{fontWeight : `${head ? "bold" : ""}`}}>
    {text}
  </Typography>
)
}
export default Home