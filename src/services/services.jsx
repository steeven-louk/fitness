import axios from "axios";

const  url= 'https://exercisedb.p.rapidapi.com/exercises';
const  bodyPartsUrl= 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log('test',response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const GetAllExercice = async() =>{
    const getData = await axios(url, options);
    return getData;
}

export const GetBodyPart = async() =>{
  const getBody = await axios.get(bodyPartsUrl, options);
  return getBody.data;
}