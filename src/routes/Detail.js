import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>loading</h1> :
                (<div>
                    <MovieDetail
                        key={movie.id}
                        title={movie.title_long}
                        description={movie.description_full}
                    />

                </div>
                )}
        </div>
    )
}
export default Detail;