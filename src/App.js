import React, {useState} from 'react'
import './App.css';
import Navbars from './component/Navbar';
import Movies from './component/Movies';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import MovieDetail from './component/MovieDetail';

function App() {
  const [data, setData] = useState('');
  const searchValue = (e) =>{
    setData(e);
  }
  
  //console.log(data);
  return (
    <>
    <Navbars  searchValue={searchValue}/>
     <div className='container'>
    <Router>
      <Routes>
          <Route exact path='/' element={<Movies filtered={data}/>} />
          <Route  path='/MovieDetail/:id' element={<MovieDetail />} />
      </Routes>
    </Router> 
    </div>
    </>
    
  );
}

export default App;
