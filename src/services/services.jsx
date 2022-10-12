import axios from "axios";

const  url= 'https://exercisedb.p.rapidapi.com/exercises'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '47099885b7msha569d88eaf12779p1db488jsnab1b570843ec',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log('test',response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const GetAllExercice = async() =>{
    const getdata = await axios(url, options);
    console.log('====================================');
    console.log(getdata);
    console.log('====================================');
}

