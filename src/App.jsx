
import './App.css'
import { useState } from "react";
import Banner from './components/Hero_Area/Banner'
import Navbar from './components/Navbar/Navbar';
import WorkFlow from './components/WorkFlow/WorkFlow';
import Footer from './components/Footer/Footer';
import FirstCard from './components/Cards/FirstCard';
import ToggleButtons from './components/Cards/ToggleBtn'

import Rating from './components/Rating';
import GetStarted from './components/Cards/GetStarted';
import Pricing from './components/Cards/Pricing'




const getCard = async ()=>{
  const res = await fetch("/data.json")
  return res.json();
}

const cardsPromise = getCard();


function App() {
 const [cart, setCart] = useState([]);

   const handleAddToCart = (card) => {
    setCart([...cart, card]);
  };


  return (
    <>

<Navbar cartCount={cart.length} />
<Banner></Banner>
<Rating/>

{/* <FirstCard cardsPromise = {cardsPromise}></FirstCard> */}
<FirstCard cardsPromise = {cardsPromise} handleAddToCart={handleAddToCart}/>
 
 

<GetStarted/>

<Pricing/>

<WorkFlow></WorkFlow>
<Footer></Footer>

   </>
  )
}

export default App;
