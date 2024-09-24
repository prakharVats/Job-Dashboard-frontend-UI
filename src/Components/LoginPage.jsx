import { Box, Button, Stack, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'
import BgImg from "../../public/BgImg.jpg"


const border = {
    border:"2px solid #FAF7F0"
}

const divStyle = {
    height: '100vh', 
    backgroundImage: `url(${BgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity:0.2,
};

const LoginPage = () => {
    const [visible , setVisible] = useState(1)
  return (
    <Box sx={{backgroundColor:"#121111"}}>

        {/* Background Image */}
    <Box sx={{height:"100vh" , display:"flex" , ...divStyle}}></Box>

    {/* Form */}
    <Box sx={{bgcolor:"#121111" , color:"white" , width:"400px" , borderRadius:"5px" , p:"20px" , height:"350px" , position:"fixed" , top:"170px" , left:"550px"}}>

            <Typography sx={{textAlign:"center" , fontSize:"25px" , mt:"20px"}}>
                Admin
            </Typography>
            <Input m ="20px" pHolder = "Email address" />
            <Input m = "40px"  pHolder= "Password"/>
            <Box sx={{position:"relative" ,bottom:"48px" , left:"320px" , display:"inline-flex"}}>
               {visible ? <VisibilityIcon sx={{fontSize:"30px" , marginTop:"5px" , color:"black" , cursor:"pointer"}}/> : <VisibilityOffIcon sx={{fontSize:"30px" , marginTop:"5px" , color:"black" , cursor:"pointer"}}/>}
               
            </Box>
            <Button sx={{...border , width:"80%" , ml:"10px", mt:"40px" , color:"#FAF7F0"}}>Login</Button>
          

            {/* <Typography>
                Email
            </Typography>
             */}
        </Box> 

</Box>
  )
}

const Input = ({m , pHolder}) =>{
    return <Box sx={{display:"flex" , justifyContent:"center" , mt:`${m}`}}>
    <input style={{bgcolor:"inherit" , height:"30px" , width:"300px" , borderRadius:"5px" , border:"none" , padding:"5px" , paddingLeft:"10px"}} placeholder={pHolder}/>
</Box>
}

export default LoginPage