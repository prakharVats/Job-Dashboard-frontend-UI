import { Avatar, Box, Typography } from '@mui/material'
import React, { useState } from 'react'



const SideBar = () => {
   
  return (
    <Box sx={{bgcolor:"#121111" , color:"white" , height:"100vh" , position:"sticky" , top:"0px"}}>
        <Box sx={{pt:"50px"}}>
            <Avatar alt="Remy Sharp" src="../../public/PfP.jpg" sx={{height:"100px" , width:"100px" , ml:"65px"}}/>
        </Box>

        <Tab title="Home"/>
        <Tab title="Feed"/>
        <Tab title="Search Jobs"/>
        <Tab title="Drafts"/>
        <Tab title="Uploads"/>

        <Typography sx={{ml:"10px" , mr:"20px" , mt:"40px"}}>
                Copyright 2024 All rights reserved | This is a job searching <span style={{color:"#f0cb4d"}}>platform</span> 
        </Typography>
    </Box>
  )
}

const Tab = ({title})=>{
    const [isHovered , setIsHovered] = useState(false);
    return <>
        <Box>
            <Typography  onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)} sx={{mr:"20px" , mt:"25px",ml:"10px" , borderBottom:"1px solid #404040" , fontSize:"20px" , cursor:"pointer"  , color:`${isHovered ? "#f0cb4d" : "white"}`}}>
                {title}
            </Typography>
        </Box>
    </>
}
export default SideBar