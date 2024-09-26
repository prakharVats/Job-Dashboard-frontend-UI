import { Avatar, Box, Typography } from '@mui/material'
import { color } from 'chart.js/helpers'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const SideBar = () => {
   
  return (
    <Box sx={{bgcolor:"#121111" , color:"white" , height:"100vh" , position:"sticky" , top:"0px"}}>
        <Box sx={{pt:"50px"}}>
            <Avatar alt="Remy Sharp" src="../../public/PfP.jpg" sx={{height:"100px" , width:"100px" , ml:"65px"}}/>
        </Box>
        <Tab title="Home" to = "/"/>
        <Tab title="Feed" to = "/feed"/>
        <Tab title="Search Jobs" to = "/Search"/>
        <Tab title="Drafts" to = "/drafts"/>
        <Tab title="Uploads" to = "/Uploads"/>
        <Typography sx={{ml:"10px" , mr:"20px" , mt:"40px"}}>
                Copyright 2024 All rights reserved | This is a job searching <span style={{color:"#f0cb4d"}}>platform</span> 
        </Typography>
    </Box>
  )
}

const Tab = ({title , to})=>{
    const [isHovered , setIsHovered] = useState(false);
    return <>
        <Box>
            <Typography  onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)} sx={{mr:"20px" , mt:"25px",ml:"10px" , borderBottom:"1px solid #404040" , fontSize:"20px" , cursor:"pointer"}}>
              <Link style={{color:"white" , textDecoration:"none" ,color:`${isHovered ? "#f0cb4d" : "white"}`}} to={to}>{title}</Link>  
            </Typography>
        </Box>
    </>
}
export default SideBar