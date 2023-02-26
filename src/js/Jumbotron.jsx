import React, {useState} from "react";

const Jumbotron = (props) => {
  

  const [newImg, newSetImg] = useState("");
  const [newTitle, newSetTitle] = useState("");
  const [newBody, newSetBody] = useState("");
  let count = 4;
  
  const handleNewCard = () => {
    count++;
    let newCard = {
      img: newImg,
      title: newTitle,
      body: newBody,
      id: props.count
    }
    
    let newArray = [...props.temporalCards]
    console.log(newArray, props.temporalCards)
    newArray.push(newCard);
    props.setTemporalCards(newArray);

  }
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
          <h1 className="display-5 fw-bold">Add a New Card</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="InputImg" className="form-label">
            Imagen (URL) :
          </label>
          <input
            name="image"
            value={newImg}
            onChange={e => newSetImg(e.target.value)}
            type="text"
            className="form-control"
            id="inputImg"
            aria-describedby="add a img"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Title :
          </label>
          <input
            name="title"
            value={newTitle}
            onChange={e => newSetTitle(e.target.value)}
            type="text"
            className="form-control"
            id="inputTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="BodyCard" className="form-label">
            Body Card :
          </label>
          <textarea
            name="body"
            value={newBody}
            onChange={e => newSetBody(e.target.value)}
            className="form-control"
            id="inputBody"
            rows="6"
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleNewCard}
        >
          New Card
        </button>
      </form>
    </div>
  );
};
export default Jumbotron;
