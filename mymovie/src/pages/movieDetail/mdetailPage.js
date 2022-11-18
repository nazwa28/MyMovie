import React, { useEffect, useState } from "react";
import './mdetailPage.css';
import { useParams } from "react-router-dom";

const MovieDetail = () => {

    const [currentMovieDetail, setMovieDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    }

    return (
       <div className="movie">
            <div className="movie_intro">
                <img className="movie_backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path:""}`}/>
            </div>

            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_posterBox">
                      <img className="movie_poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path:""}`}/>
                    </div>
            </div>

            <div className="movie_detailRight">
                <div className="movie_detailRightTop">
                    <div className="movie_name">{currentMovieDetail ? currentMovieDetail.original_title: ""}</div>
                    <div className="movie_tagline">{currentMovieDetail ? currentMovieDetail.tagline: ""}</div>
                    <div className="movie_rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star"/>
                        <span className="movie_voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>

                    <div className="movie_runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie_releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie_genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ?
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                            ))
                            :
                            ""
                        }
                </div>
            </div>

            <div className="movie_detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <div className="detailTeks">{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>   

            </div>
        </div>

        {/* ====================== C1 ===================== */}

        <div className="movie_links">
            <div className="movie_heading">Usefull links</div>
            {
                currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none" }}> <p><span className="movie_homeButton movie_Button">Home <i className="newTab fas fa-external-link-alt"/></span> </p> </a>
            }
            {
                currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie_imdbButton movie_Button">IMDB<i className="newTab fas fa-external-link-alt"/></span></p></a>
            }
        </div>

        <div className="movie_heading">Production companies</div>
        <div className="movie_production">
            {
                currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                    <>
                        {
                            company.logo_path
                            &&
                            <span className="productionCompanyImage">
                                <img className="movie_productionCompany" src={"https://image.tmdb.org/t/p/original" + company.logo_path}/>
                                <span>{company.name}</span>
                            </span>
                        }
                    </>
                ))
            }
        </div>
    </div>
    )
}

export default MovieDetail