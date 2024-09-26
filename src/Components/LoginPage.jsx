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
    const [visible , setVisible] = useState(true);
    const [type , setType] = useState("password");

    function handleOnClick(){
        setVisible(!visible);
        setType(() => {
            return (type === "text" ? "password" : "text");
        })
    }

  return (
    <Box sx={{backgroundColor:"#121111"}}>

        {/* Background Image */}
    <Box sx={{height:"100vh" , display:"flex" , ...divStyle}}></Box>

    {/* Form */}
    <Box sx={{bgcolor:"#121111" , color:"white" , width:"400px" , borderRadius:"5px" , p:"20px" , height:"350px" , position:"fixed" , top:"170px" , left:"550px"}}>

            <Typography sx={{textAlign:"center" , fontSize:"25px" , mt:"20px"}}>
                Admin
            </Typography>
            <Input m ="20px" pHolder = "Email address" type = "text"/>
            <Input m = "40px"  pHolder= "Password" type = {type}/>
            <Box sx={{position:"relative" ,bottom:"44.5px" , left:"295px" , display:"inline-flex"}}>
               {visible ? <VisibilityIcon onClick={handleOnClick} sx={{fontSize:"30px" , color:"black" , cursor:"pointer"}}/> : <VisibilityOffIcon onClick={handleOnClick} sx={{fontSize:"30px" , color:"black" , cursor:"pointer"}}/>}
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

const Input = ({m , pHolder , type}) =>{
    return <Box sx={{display:"flex" , justifyContent:"center" , mt:`${m}`}}>
    <input type={type} style={{bgcolor:"inherit" , height:"30px" , width:"300px" , borderRadius:"5px" , border:"none" , padding:"5px" , paddingLeft:"10px"}} placeholder={pHolder}/>
</Box>
}

export default LoginPage