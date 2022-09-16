import axios from 'axios';
import { LOAD_DATA_BY_LAT_LONG } from './types';

export const getLocation=(data)=>{
    return{
        type: LOAD_DATA_BY_LAT_LONG,
        payload: data
    }
}

const fetchData=(latitude,longitude)=>{
    return (dispatch)=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=acd3384144582e0d467e4df562bbb351`)
            .then(response=>{
             const dt=response.data;
              dispatch(getLocation(dt));
            })
            .catch(error=>{
              const e=error.message;
              console.log(e);
            })
    }
  }
  export default fetchData;