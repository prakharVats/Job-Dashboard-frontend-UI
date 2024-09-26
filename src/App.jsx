import Grid from '@mui/material/Grid2';
import LoginPage from "./Components/LoginPage"
import "./style.css"
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Feed from './Components/Feed';
import Drafts from './Components/Drafts';



function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Grid container>
        <Grid size={2.2} >
          <SideBar/>
        </Grid>
        <Grid size={9.8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/drafts" element={<Drafts />} />
            {/* <Route path="/Login" element={<LoginPage />} /> */}
            {/* <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        
        </Grid>
      </Grid>
    </>
  )
}

export default App
