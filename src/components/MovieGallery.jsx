import { useState, useEffect } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

const MovieGallery = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=766db7eb&s=${searchQuery}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search ? data.Search.slice(0, 6) : []);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError("Error fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Caricamento👾</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="text-center">
        <Alert variant="warning">
          Nessun risultato trovato per "{searchQuery}" 😩
        </Alert>
      </div>
    );
  }

  return (
    <div className="movie-gallery my-2 mx-5">
      <h2>Risultati di ricerca per "{searchQuery}"</h2>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} md={4} lg={2} className="text-center">
            <div className="card-container">
              <Link to={`/movie-details/${movie.imdbID}`}>
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"
                  }
                  alt={movie.Title}
                  className="img-fluid"
                />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieGallery;

//codice carosello ma sistemato con gpt e  non correttissimo
// import { useState, useEffect } from "react";
// import { Row, Col, Carousel } from "react-bootstrap";
// import "../style.css";

// const MovieGallery = ({ searchQuery }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           `https://www.omdbapi.com/?apikey=766db7eb&s=${searchQuery}`
//         );
//         const data = await response.json();
//         setMovies(data.Search ? data.Search.slice(0, 12) : []);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, [searchQuery]);

//   const chunkMovies = (movies, chunkSize) => {
//     const chunks = [];
//     for (let i = 0; i < movies.length; i += chunkSize) {
//       chunks.push(movies.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   const movieChunks = chunkMovies(movies, 6);

//   return (
//     <div className="movie-gallery my-2 mx-5">
//       <Carousel interval={3000} controls={true} indicators={true} wrap={true}>
//         {movieChunks.map((chunk, index) => (
//           <Carousel.Item key={index}>
//             <Row className="justify-content-center g-4">
//               {chunk.map((movie) => (
//                 <Col
//                   key={movie.imdbID}
//                   xs={6}
//                   md={4}
//                   lg={2}
//                   className="text-center"
//                 >
//                   <div className="carousel-item-container">
//                     <img
//                       src={
//                         movie.Poster !== "N/A"
//                           ? movie.Poster
//                           : "default-image.jpg"
//                       }
//                       alt={movie.Title}
//                       className="d-block w-100"
//                     />
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default MovieGallery;
