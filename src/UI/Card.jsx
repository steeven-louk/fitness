import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    
  const id = props.item.id;

  return (
    <Link to={`/details/${id}`} className="card col-3 ">
      <img src={props?.item.gifUrl} alt="" className="card-img-top" />
      <div className="card-body">
        <div className="target d-flex mb-3 gap-2">
          <span className="text-center fw-bold text-white bg-danger">
            {props?.item.target}
          </span>
          <span className="text-center fw-bold text-white bg-danger">
            {props?.item.bodyPart}
          </span>
        </div>
        <h4 className="fw-bold text-capitalize">{props?.item.name}</h4>
      </div>
    </Link>
  );
};

export default Card;
