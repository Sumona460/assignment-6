
import './App.css'
import Banner from './components/Hero_Area/Banner'
import Navbar from './components/Navbar/Navbar';
import WorkFlow from './components/WorkFlow/WorkFlow';
import Footer from './components/Footer/Footer';
import FirstCard from './components/Cards/FirstCard';



const getCard = async ()=>{
  const res = await fetch("/public/data.json")
  return res.json()
}

const cardsPromise = getCard()


function App() {


  return (
    <>
<Navbar></Navbar>
<Banner></Banner>

{/* <FirstCard cardsPromise = {cardsPromise}></FirstCard> */}
<FirstCard cardsPromise = {cardsPromise}/>

<WorkFlow></WorkFlow>
<Footer></Footer>

   </>
  )
}

export default App;
