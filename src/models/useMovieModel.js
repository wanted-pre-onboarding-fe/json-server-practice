import React from "react";
import { movieRequest } from "../services/movieService";
export const useMovieModel=()=>{
  const [movies, setMovies]= React.useState(null);
  
  const getMoviesCallback = (response)=>{
    setMovies(response.data)
  }

  const getMovies = async ()=>{
    const response = await movieRequest.get("")
    getMoviesCallback(response)
  }

  const patchMovieById = async (id,data)=> {
   return await movieRequest.patch(id,data)
   
  }

  return {
    movies,
    getMovies,
    patchMovieById
  }
}
