import React, { useEffect, useState } from 'react'
import Exercises from '../../components/exercises/Exercises'
import HeroBanner from '../../components/herosBanner/HeroBanner'
import SearchExercises from '../../components/searchEx/SearchExercises'
import { GetAllExercice } from '../../services/services'

const Home = () => {

  const [exercice, setExercice] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

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

  return (
    <>
      <HeroBanner/>
      <h1 className='text-center text-capitalize fw-bold'>awesome exercises you should know</h1>
      <br />
      <SearchExercises exercice={exercice} bodyParts={bodyParts} setBodyParts={setBodyParts}  setExercice={setExercice}/> <br/>
      <Exercises exercice={exercice}/>
    </>
  )
}

export default Home