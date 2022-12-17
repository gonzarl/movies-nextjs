function MovieCard(props){
    const movie = props.movie;
    return (
        <a href="#" className="group relative block font-bold text-center">
            <img
                alt="Movie poster"
                src= {movie.portada}
                className="absolute inset-0 h-full rounded-3xl shadow-xl w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-8">
                <p className="font-medium font-extrabold uppercase tracking-widest text-red-600">
                    {movie.fecha}
                </p>

                <p className="text-2xl text-white">{movie.rate}</p>

                <div className="mt-52">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-2xl text-white">{movie.titulo}</p>
                        <p className="text-xl text-white">{movie.ano}</p>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default MovieCard