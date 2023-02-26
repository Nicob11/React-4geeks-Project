import React, {useState} from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { cartas } from "./cartas.jsx";
import Footer from "./Footer.jsx";



const Portada = () =>{
    
    const [temporalCards, setTemporalCards] = useState(cartas);
    let count = 4;
    const handleDeleteCard = (card) =>{ 
        
        const newArray = temporalCards.filter((carta) => carta.id !== card.id);
        setTemporalCards(newArray)
    }
    const handleNewCard = () =>{
        count++;
        let newCard = [...temporalCards]
        const otherCard = {
            img:`https://i.imgur.com/zXGdRb3.jpg`,
            title: `Card`,
            body:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo numquam consectetur rerum minus ab velit architecto aliquam ducimus exercitationem id assumenda molestias neque omnis cum ipsum tempora impedit, aliquid odio.`,
            id:{count}
        
        }
        console.log('hello',count)
        newCard.push(otherCard)
        setTemporalCards(newCard)
    }
    return (
        <>
            <Navbar/>
            <div className="container">
            <Jumbotron handleNewCard={handleNewCard}/>
            <div className="row p-0">
            {temporalCards.map((carta) => <Cards handleDeleteCard={handleDeleteCard} id={carta.id} key={carta.id} src={carta.img} title={carta.title} body={carta.body}/>)}
            </div>
            </div>
            <Footer/>
        </>

    )
}
export default Portada