import React, { useEffect, useState } from 'react'
import Exercises from '../../components/exercises/Exercises'
import HeroBanner from '../../components/herosBanner/HeroBanner'
import Pagination from '../../components/pagination/Pagination'
import SearchExercises from '../../components/searchEx/SearchExercises'
import { GetAllExercice } from '../../services/services'

const Home = () => {

  const [exercice, setExercice] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(18);

  const getAllExercise = async() =>{
    const AllExercise = await  GetAllExercice().then((data) => data) 
    .catch((error)=> console.log('error', error.message));
    
    if(AllExercise.status === 200){
      setExercice(AllExercise.data);
    }
  }

  useEffect(() => {
   getAllExercise();
  }, []);

  //Get current page
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentCard = exercice.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <HeroBanner/>
      <h1 className='text-center text-capitalize fw-bold'>awesome exercises you should know</h1>
      <br />
      <SearchExercises exercice={currentCard} bodyParts={bodyParts} setBodyParts={setBodyParts}  setExercice={setExercice}/> <br/>
      <Exercises exercice={currentCard}/>
      <Pagination postPerPage={postPerPage} setCurrentPage={setCurrentPage} totalPost={exercice.length}/>
    </>
  )
}

export default Home