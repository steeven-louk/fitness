import React from 'react'
import HeroBanner from '../../components/herosBanner/HeroBanner'
import SearchExercises from '../../components/searchEx/SearchExercises'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <h1 className='text-center text-capitalize fw-bold'>awesome exercises you should know</h1>
      <br />
      <SearchExercises/>
    </>
  )
}

export default Home