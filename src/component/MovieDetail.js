import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



const MovieDetail = () => {
    const { id } = useParams();
    
    const [details, setDetails] = useState([]);

    useEffect(() => {
        async function getData (){
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=130f91d179b7279fb58796d49a06fa32&language=en-US');
            setDetails(response.data.results);
            
          }
          getData();
    },[])
    const IMG_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className='detail-page my-3'>
        {details.filter((item)=> item.id == id).map((item) => {
                return(
                    <div className='col-12 single-movie' key={item.id}>
                    <div className='detail-content'>
                      <img src={IMG_API + item.backdrop_path} alt={item.title} className='img-fluid'/>
                      <div className='inner-content'>
                          <h6 className='title mb-3' >{item.title}</h6>
                          <p className='desc mb-2'>{item.overview}</p>
                          <p>Release date: {item.release_date}</p>
                      </div>
                    </div>
                    </div>
                )
            }
         )}
         
    </div>
  )
}

export default MovieDetail