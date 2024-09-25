import Grid from '@mui/material/Grid2';
import LoginPage from "./Components/LoginPage"
import "./style.css"
import SideBar from './Components/SideBar';
import Home from './Components/Home';


function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Grid container>
        <Grid size={2.2} >
          <SideBar/>
        </Grid>
        <Grid size={9.8}>
          <Home/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
