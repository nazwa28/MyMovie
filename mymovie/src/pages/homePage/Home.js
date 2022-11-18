import React, { useEffect, useState } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const Home = () => {

  const [ popularMovies, setPopularMovies ] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
  },[])

  return (
    <>
      <div className='poster'>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            popularMovies.map(movie => (
              <Link style={{textDecoratin:"none", color:"white"}} to={`/movie/${movie.id}`}>
                <div className='posterImage'>
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                </div>
                <div className='posterImage_overlay'>
                  <div className='posterImage_title'>{movie ? movie.original_title: ""}</div>
                  <div className='posterimage_runtime'>
                    <span className='posterImage_rating'>
                      <i className='fas fa-star' />{" "}
                      {movie ? movie.vote_average : " "}
                    </span> <br/>
                    {movie ? movie.release_date : ""} 
                  </div>
                  <div className='posterImage_description'>{movie ? movie.overview : " "} </div>
                </div>
                </Link>
            ))
          }
        </Carousel>
        
        <div className='popular'>
          <MovieList />
        </div>
        
      </div>
    </>
  )
}

export default Home