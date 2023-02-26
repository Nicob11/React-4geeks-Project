import React,{useState} from "react";



function test(){
  
}

const Jumbotron = (props) => {
  const [newImg, newSetImg]= useState("")
  const [newTittle, newSetTittle]= useState("")
  const [newBody, newSetBody] = useState("")

  const handleNewCard = ()=> {
    let newCard = {
      img: newImg,
      title: newTittle,
      body: newBody,
      id:  props.countId
    }

    let newArray = [...props.cartasTemp]
    newArray.push(newCard)
    props.setCartasTemp(newArray)
  
  }
  

    return (<div className="p-5 my-4 bg-light rounded-3">
    <div className="container-fluid">
      <h1 className="text-center"> Create new card </h1>
      <form>

        <label for="inputImg" className="form-label">Imagen (URL) :</label>
        <input name="image" value={newImg} onChange={e => newSetImg(e.target.value)}  type="text" className="form-control mb-3" id="inputImg" aria-describedby="emailHelp"/>

        <label for="inputTittle" className="form-label">Titulo :</label>
        <input name="tittle" value={newTittle} onChange={e => newSetTittle(e.target.value)}  type="text" className="form-control mb-3" id="inputTittle" aria-describedby="emailHelp"/>


        <label for="inputBody" class="form-label">Descripcion :</label>
        <textarea name="body" type="email" onChange={e => newSetBody(e.target.value)} class="form-control mb-3" id="inputBody" aria-describedby="emailHelp" rows="5">{newBody}</textarea>

      </form>

    
      
      {/*
      
      
      */} 
      
      <button className="btn btn-primary btn-lg" type="button" onClick={handleNewCard}>Añadir carta</button>

    </div>
  </div>
    )
}
export default Jumbotron;