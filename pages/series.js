import MovieCard from "../components/MovieCard/MovieCard"
import serieService from '../pages/services/NotionService'

function SeriesPage({series}) {
    return (
        <div className = "flex flex-col justify-between bg-black/75">
            <div className="my-16 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:mx-20 xl:gap-6 md:mx-10 md:gap-4">
                {series.map(((serie) => (
                    <MovieCard movie={serie} key={serie.id}/>
                )))}
            </div>  
        </div>
    )
}

export async function getServerSideProps(){
    const series = await serieService.getSeries()
    return { props: { series } }
}

export default SeriesPage