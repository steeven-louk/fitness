import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/detail/Detail'
import { getExerciceById, youtubeSearchData } from '../../services/services';

const Details = () => {

    const {id} = useParams();
    
    const [exercise, setExercise] = useState({});

    const getExercice = async() =>{
        const data = await getExerciceById(id).then((data) => data)
        .catch((error)=> console.log('error', error));
        
        if(data.status === 200){
            setExercise(data.data);
        }
    }

    const getYoutubeSearch = async () =>{
        const data = await youtubeSearchData(exercise.name).then((data) => data)
        .catch((error)=> console.log('error', error));

        console.log('data', data);
    }

    
    useEffect(() => {
       getExercice();
       getYoutubeSearch();
    }, []);

  return (
    <>
        <Detail exercise={exercise} />
    </>
  )
}

export default Details