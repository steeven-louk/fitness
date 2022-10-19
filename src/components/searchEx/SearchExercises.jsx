import React, { useEffect, useState } from 'react'
import { GetAllExercice, GetBodyPart } from '../../services/services';
import HorizontalScrollbar from '../horizontalScrollbar/HorizontalScrollbar';
import './style/style.scss';


const SearchExercises = (props) => {

    const [search, setSearch] = useState('');

    const { setExercice, bodyParts, setBodyParts} = props;
    const [bodyPart, setBodyPart] = useState([]);
    

    const handleSearch = async() =>{
        if(search){
            const searchEx = await GetAllExercice().then((data) => data) 
            .catch((error)=> console.log('error', error.message))
           
            if(searchEx.status === 200){
                const searchedExercises = searchEx?.data.filter(
                    (exercice) => exercice.name.toLowerCase().includes(search)
                    || exercice.target.toLowerCase().includes(search)
                    || exercice.bodyPart.toLowerCase().includes(search)
                );
                setSearch('');
                setExercice(searchedExercises)
            }
          
        }
    }

    const fetchBodyPart = async () =>{
          const bodyPartData = await GetBodyPart().then((data)=> data)
      .catch((error)=> console.log('error', error));
      setBodyPart(['all', ...bodyPartData])
    }

    useEffect( () => {
        fetchBodyPart();
    }, []);

    
  return (
    <>
        <div className="search__container d-flex justify-content-center ">
            <input type="text" value={search} name="search" onChange={(e)=> setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' />
            <button onClick={handleSearch} className="btn btn-danger">search</button>
        </div>
        <div className="bodyPart">
            <HorizontalScrollbar data={bodyPart} setbodyParts={setBodyParts}/>
        </div>
    </>
  )
}

export default SearchExercises