import axios from "axios";

const  url= 'https://exercisedb.p.rapidapi.com/exercises';
const  bodyPartsUrl= 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const ExerciceByID= "https://exercisedb.p.rapidapi.com/exercises/exercise/";
const byTargetUrl = "https://exercisedb.p.rapidapi.com/exercises/target/"
const YoutubeSearch = `https://youtube-search-and-download.p.rapidapi.com/search?q=`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

// const YoutubeOptions = {
//   method: 'GET',
 
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };


export const GetAllExercice = async() =>{
    const getData = await axios(url, options);
    return getData;
}

export const GetBodyPart = async() =>{
  const getBody = await axios.get(bodyPartsUrl, options);
  return getBody.data;
}

export const getExerciceById = async(id) =>{
 try {
  const getExercice = await axios.get(ExerciceByID + id, options);
  return getExercice;

 } catch (error) {
    console.error('error', error);
 }
}

export const youtubeSearchData = async(YoutubeOptions) =>{
 try {
  const getVideo = await axios(YoutubeSearch, YoutubeOptions);
  return getVideo.data.contents;

 } catch (error) {
  console.error('error', error);
 }
}

export const similarTarget = async(target) =>{
  try{
    const getTarget = await axios(byTargetUrl + target, options);
    console.log(getTarget)
    return getTarget;
  }catch(error){
    console.error('error', error);
  }
}