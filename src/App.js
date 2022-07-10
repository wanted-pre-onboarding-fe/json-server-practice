import React from "react"
import { useMovieModel } from './models/useMovieModel';
function App() {
  const { movies ,getMovies,patchMovieById}= useMovieModel()
  React.useEffect(()=>{
    getMovies()
  },[])

  // const onClickImageCallback =(id,data)=>{
  //   patchMovieById(id,{like:!data.like}).then(getMovies)
  // }
  //or
  const onClickImageCallback = async (id,data)=>{
    await patchMovieById(id,{like:!data.like})
    await getMovies()
  }

  console.log({movies})
  return (
    <div className="App">
     {movies?.map((movie,index)=>(<span key={index}style={{border: movie.like ? "10px solid blue":"none"}} onClick={()=>onClickImageCallback(movie.id,movie)}><img src={movie.large_cover_image} alt="poster"/></span>))}
    </div>
  );
}

export default App;
