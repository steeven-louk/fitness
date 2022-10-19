import React, { useEffect, useState } from "react";
import Exercises from "../../components/exercises/Exercises";
import HeroBanner from "../../components/herosBanner/HeroBanner";
import Pagination from "../../components/pagination/Pagination";
import SearchExercises from "../../components/searchEx/SearchExercises";
import { GetAllExercice, GetByBodyPart } from "../../services/services";

const Home = () => {
  const [exercice, setExercice] = useState([]);
  const [bodyParts, setBodyParts] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);


  const getAllExercise = async () => {
    let exercisesData = [];

    if(bodyParts === 'all'){
      exercisesData = await GetAllExercice().then((data) => data)
      .catch((error) => console.log("error", error.message));
    } else {
      exercisesData = await GetByBodyPart(bodyParts).then((data) => data)
      .catch((error) => console.log("error", error.message));
    }

    setExercice(exercisesData.data);
  };

  useEffect(() => {
    getAllExercise();
  }, []);

  // console.log('get', bodyParts);

  //Get current page
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentCard = exercice.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <HeroBanner />
      <h1 className="text-center text-capitalize fw-bold">
        awesome exercises you should know
      </h1>
      <br />
      <SearchExercises
        exercice={currentCard}
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
        setExercice={setExercice}
      />{" "}
      <br />
      <Exercises setExercice={setExercice} exercice={currentCard} bodyParts={bodyParts} />

      <Pagination
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        totalPost={exercice.length}
      />
    </>
  );
};

export default Home;
