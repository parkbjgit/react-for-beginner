import PropTypes from "prop-types";


function MovieDetail({ id, title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    )
}

MovieDetail.propTypes={
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}

export default MovieDetail;