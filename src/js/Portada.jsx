import React, {useState} from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { cartas } from "./cartas.jsx";
import Footer from "./Footer.jsx";

let count = 4;
const Portada = () =>{
    
    const [temporalCards, setTemporalCards] = useState(cartas);
    const handleDeleteCard = (card) =>{ 
        
        const newArray = temporalCards.filter((carta) => carta.id !== card.id);
        setTemporalCards(newArray)
    }

    const countIDs = ()=>{
        count++
        return count
    }
    return (
        <>
            <Navbar/>
            <div className="container">
            { <Jumbotron temporalCards={temporalCards} setTemporalCards={setTemporalCards} count={countIDs()}/>}
            <div className="row p-0">
            {temporalCards.map((carta) => <Cards handleDeleteCard={handleDeleteCard} id={carta.id} key={carta.id} src={carta.img} title={carta.title} body={carta.body}/>)}
            </div>
            </div>
            <Footer/>
        </>

    )
}
export default Portada