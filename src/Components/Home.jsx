import { Box, Stack, Typography } from '@mui/material'
import Pie from './Graphs/Pie.jsx'
import Line from './Graphs/LineGraph.jsx'
import Table from "./Minor/Table.jsx"
const border= {
  border:"1px solid black"
}

// const weight = {
//   fontWeight : "bold"
// }
const Home = () => {
  // const RowD = ["S/n" , "Company" , "Salary" , "City" , "Type"];
  const DummyData = [
    {No : "1" , Company : "Microsoft" , Salary : "42Lpa" , City:"Bengalore" , Type:"On Field"},
    {No : "2" , Company : "Amazon" , Salary : "72Lpa" , City:"NaN" , Type:"Remote"},
    {No : "3" , Company : "Google" , Salary : "1.2Cr" , City:"Pune" , Type:"On Field"},
  ]
  const TitleData = [{No : "S/n" , Company : "Company" , Salary : "Salary" , City:"City" , Type:"Type"},]
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
            
           
          </Box>  
        </Stack>
        <Stack direction="row">
        <Table/>
        <Table/>
        </Stack>
    </Box>
  )
}
     

const Rows = ({e}) =>{
  console.log(e.No);
  return <>
  <Stack direction="row" spacing={10} padding={2}>
    <Typography sx={{fontWeight : `${e.No === "S/n" ? "bold" : ""}`}}>{e.No}</Typography>
    <Typography sx={{fontWeight : `${e.No === "S/n" ? "bold" : ""}`}}>{e.Company}</Typography>
    <Typography sx={{fontWeight : `${e.No === "S/n" ? "bold" : ""}`}}>{e.Salary}</Typography>
    <Typography sx={{fontWeight : `${e.No === "S/n" ? "bold" : ""}`}}>{e.City}</Typography>
    <Typography sx={{fontWeight : `${e.No === "S/n" ? "bold" : ""}`}}>{e.Type}</Typography>
 </Stack>
  </>
}
const Rows2 = ({e}) =>{
  
  <>
  <Stack direction="row" spacing={10} padding={2}>
  <Typography color='black'>hello</Typography>
    <Typography>hello</Typography>
    <Typography>hello</Typography>
    <Typography>hello</Typography>
    <Typography>hello</Typography>
 </Stack>
  </>
}

export default Home