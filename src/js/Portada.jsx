import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import { cartas } from "./Cartas.jsx";
import Footer from "./Footer.jsx";

const carta = cartas.map((carta,i) => <Cards key={i} src={carta.img} title={carta.title} body={carta.body}/>);

const Portada = () =>{
    return (
        <>
            <Navbar/>
            <div className="container">
            <Jumbotron/>
            <div className="row p-0">
            {carta}
            </div>
            </div>
            <Footer/>
        </>

    )
}
export default Portada