import React from "react";

const Cards = (props) => {
  const handleDeleteCard = () => props.onDeleteCard(props.id)

  return (
    <div id={props.id} className="cardContainer col-md-3 col-12">
      <div className="card m-1">
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.body}
          </p>
          <button className="btn btn-primary" onClick={handleDeleteCard}>
            Delete this!
          </button>
        </div>
      </div>
      </div>
  );
};

export default Cards;
