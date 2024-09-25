import {Line} from "react-chartjs-2"
import {
  Chart , 
  CategoryScale ,
  LinearScale ,
  PointElement ,
  LineElement ,
  Title ,
  Tooltip  ,
  Legend
} from 'chart.js'
import { lineChartData } from "./FakeData"

Chart.register(
    CategoryScale ,
    LinearScale ,
    PointElement ,
    LineElement ,
    Title ,
    Tooltip ,
    Legend
)

const LineGraph = () => {
    const options = {};
  return (
    <Line  data = {lineChartData}></Line>
  )
}

export default LineGraph