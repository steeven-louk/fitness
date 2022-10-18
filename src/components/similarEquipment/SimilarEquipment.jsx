import React from "react";
import Card from "../../UI/Card";

const SimilarEquipment = ({ equipment }) => {
  return (
    <>
      <h2 className="mb-5">
        Similar{" "}
        <em className="fw-bold text-danger text-capitalize">Equipment</em>{" "}
        exercises
      </h2>{" "}
      <br />
      <div className="videos__container">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {equipment?.slice(0, 6).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarEquipment;
