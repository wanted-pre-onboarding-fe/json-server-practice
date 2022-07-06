import React from "react"
import { useMovieModel } from './models/useMovieModel';
function App() {
  const { movies ,getMovies,patchMovieById}= useMovieModel()
  React.useEffect(()=>{
    getMovies()
  },[])

  const onClickImageCallback= (id,data)=>{
    patchMovieById(id,data).then(getMovies)
    
  }

  console.log({movies})
  return (
    <div className="App">
     {movies?.map((movie,index)=>(<span key={index}style={{border: movie.like ? "10px solid blue":"none"}} onClick={()=>onClickImageCallback(movie.id,{like: !movie.like})}><img src={movie.poster} alt="poster"/></span>))}
    </div>
  );
}

export default App;
