import { Box, Stack, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
const createData = (icon , Name , date , view) => {
    return {icon , Name , date , view}
}
const Uploads = () => {
    const data = [
        createData("project" , "Job-Dashboard-frontend-UI" , "26-09-2024" , "view") , 
        createData("resume" , "Prakhar Vats" , "28-09-2024" , "view") ,
        createData("project" , "Portfolio" , "29-09-2024" , "view") ,
        createData("project" , "JavaScript practice" , "29-09-2024" , "view") ,
        createData("resume" , "Prakhar Vats 2" , "30-09-2024" , "view") ,
    ]
  return (
    <Box sx={{boxShadow: "5px 5px 15px rgba(0.3, 0, 0, 0.3)" , p : "20px" , borderRadius:"5px"}}>
        <Typography sx={{fontWeight:"bold"}}>
            Total Files Uploaded : {data.length}
        </Typography>
        {data.map(e => <Row key={e.Name} data = {e}/>)}
    </Box>
  )
}

const Row = ({data}) =>{
    console.log(data.Name);
    return <Stack direction="row" sx={{bgcolor:"#bfbfbf" , p:"10px" , borderRadius:"5px" , mt:"10px"}}>
        {/* <img src={FolderImg} alt="err" style={{height:"50px"}}></img> */}
        {data.icon === "resume" ? <DocumentScannerIcon/> : <FolderIcon/>}
        <Typography sx={{ml:"20px"}}>{data.Name}</Typography>
        <Typography sx={{m:"auto"}}>{data.date}</Typography>
        <Typography sx={{ml:"auto" , cursor:"pointer" , "&:hover":{textDecoration:"underline"}}}>view</Typography>
    </Stack>
}
export default Uploads