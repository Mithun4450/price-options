
import './App.css'
import DaisyNav from './DaisyNav/DaisyNav'
import NavBar from './NavBar/NavBar'
import PriceOptions from './PriceOptions/PriceOptions'
import LineChart from './LineChart/LineChart'
import Phone from './Phone/Phone'

function App() {
  
  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phone></Phone>
    
    </>
  )
}

export default App
