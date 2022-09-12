import React, {  useEffect, useMemo, useState}  from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Movies = (props) => {
    const [movie, setMovie] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const filteredValue = props.filtered;
  
    useEffect(() => {
      async function getData (){
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=130f91d179b7279fb58796d49a06fa32&language=en-US');
        setMovie(response.data.results);
        //console.log(response.data.results);
      }
      getData();
    }, []);

    useMemo(() =>{
      if(filteredValue !== '') {
        const filteredSearchValue = movie.filter((data) => {
          return data.title.toLowerCase().includes(filteredValue.toLowerCase());
        })
        setFilteredData(filteredSearchValue);
      }
      else{
        setFilteredData(movie);
      }
    },[filteredValue])

    // const finalData = useMemo(() => {
      
    // })
    
   const IMG_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className='row'>
        { filteredValue.length > 0 ? 
            (
              filteredData.map((item) => {
                return (
                  <div className='col-md-3 col-lg-2 col-4 my-2 single-movie' key={item.id}>
                    <Link to={`/MovieDetail/${item.id}`} >
                        <div className='content'>
                            <img src={IMG_API + item.poster_path} alt={item.title} className='img-fluid'/>
                            <div className='inner-content'>
                                <h6 className='title'>{item.title}</h6>
                                <p className='desc mb-2'>{item.overview}</p>
                                {/* <span>{item.vote_average}</span> */}
                            </div>
                        </div>
                    </Link>
                  </div>
                )
              })
            ) : 
            (
              movie.map((item) => {
                return (
                    <div className='col-md-3 col-lg-2 col-4 my-2 single-movie' key={item.id}>
                      <Link to={`/MovieDetail/${item.id}`} >
                        <div className='content'>
                            <img src={IMG_API + item.poster_path} alt={item.title} className='img-fluid'/>
                            <div className='inner-content'>
                                <h6 className='title'>{item.title}</h6>
                                <p className='desc mb-2'>{item.overview}</p>
                                {/* <span>{item.vote_average}</span> */}
                            </div>
                        </div>
                      </Link>
                    </div>
                )
            })
            )
        }
    </div>
  )
}

export default Movies;