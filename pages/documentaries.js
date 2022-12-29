import MovieCard from "../components/MovieCard/MovieCard"
import documentarieService from '../components/services/NotionService'

function documentariesPage({documentaries}) {
    return (
        <div className = "flex flex-col justify-between bg-black/75">
            <div className="my-16 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xl:mx-20 xl:gap-6 md:mx-10 md:gap-4 sm:gap-6 sm:mx-20">
                {documentaries.map(((documentarie) => (
                    <MovieCard movie={documentarie} key={documentarie.id}/>
                )))}
            </div>  
        </div>
    )
}

export async function getServerSideProps(){
    const documentaries = await documentarieService.getDocumentaries()
    return { props: { documentaries } }
}

export default documentariesPage