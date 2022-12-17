import moviesData from "../components/data/MovieData"
import MovieCard from "../components/MovieCard/MovieCard"

function MoviePage() {
    return (
        <div className = "flex flex-col h-screen justify-between bg-black/75">
            <div className="my-16 grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:mx-20 xl:gap-6 md:mx-10 md:gap-4">
                {moviesData.map(((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                )))}
            </div>  
        </div>
    )
}

export default MoviePage