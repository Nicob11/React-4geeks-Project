import React, {useState, state} from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { cartas } from "./Cartas.jsx";
import Footer from "./Footer.jsx";





let counter = 4;



const Portada = () =>{
    const [cartasTemp, setCartasTemp] = useState(cartas);

    
    const countIDs = ()=>{
        counter++
        return counter 
    }
    
    const handleDeleteCard = (id) => {
        let newArray = cartasTemp.filter((item) => {
            return item.id !== id
        })

        setCartasTemp(newArray)  
    }



    return (   
        <>
            <Navbar/>
            <div className="container">
                <Jumbotron cartasTemp={cartasTemp} setCartasTemp={setCartasTemp} countId={countIDs()} />
                <div className="row p-0">
                    {cartasTemp.map((carta) => <Cards key={carta.id} id={carta.id} src={carta.img} title={carta.title} body={carta.body}  onDeleteCard={handleDeleteCard} />)}
                </div>
            </div>
            <Footer/>
        </>

    )
}
export default Portada