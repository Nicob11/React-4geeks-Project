import React, {useState} from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { cartas } from "./cartas.jsx";
import Footer from "./Footer.jsx";



const Portada = () =>{
    
    const handleDeleteCard = (card) =>{ console.log(card)

    // const [temporalCards, setCards] = useState(cartas);

    const newArray = cartas.filter((carta) => {
        console.log(`carta`,carta.id,`card`, card.id)
       return carta.id !== card.id
    })
    console.log(newArray)
    // setCards(newArray)
}
    return (
        <>
            <Navbar/>
            <div className="container">
            <Jumbotron/>
            <div className="row p-0">
            {cartas.map((carta) => <Cards handleDeleteCard={handleDeleteCard} id={carta.id} key={carta.id} src={carta.img} title={carta.title} body={carta.body}/>)}
            </div>
            </div>
            <Footer/>
        </>

    )
}
export default Portada