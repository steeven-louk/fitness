import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../../components/detail/Detail'
import SimilarTarget from '../../components/similarTarget/SimilarTarget';
import YoutubeVideos from '../../components/youtubeVideos/YoutubeVideos';
import { getExerciceById, similarTarget, youtubeSearchData } from '../../services/services';

const Details = () => {

    const {id} = useParams();
    
    const [exercise, setExercise] = useState({});
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [getTarget, setGetTarget] = useState([]);

    const YoutubeOptions = {
        method: 'GET',
        params: {        
       query: exercise.name,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };


    const getExercice = async() =>{
        const data = await getExerciceById(id).then((data) => data)
        .catch((error)=> console.log('error', error));
        
        if(data.status === 200){
            setExercise(data.data);
        }
    }

    const getYoutubeSearch = async () =>{
        const data = await youtubeSearchData(YoutubeOptions).then((data) => data)
        .catch((error)=> console.log('error', error));
        setYoutubeVideos(data);
    }

    const getSimilarTarget = async () =>{
      const data = await similarTarget(exercise.target).then((data) => data)
      .catch((error)=> console.log('error', error));
      setGetTarget(data);
    }
      
    useEffect(() => {
       getExercice();
       getYoutubeSearch();
       getSimilarTarget();
    }, []);

  return (
    <>
        <Detail exercise={exercise} />
        <YoutubeVideos yVideos={youtubeVideos} name={exercise.name} />
        <SimilarTarget target={getTarget} />
    </>
  )
}

export default Details