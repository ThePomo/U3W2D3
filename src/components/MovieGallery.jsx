import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../style.css";

const MovieGallery = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=766db7eb&s=${searchQuery}`
        );
        const data = await response.json();
        setMovies(data.Search ? data.Search.slice(0, 6) : []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="movie-gallery my-2 mx-5">
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.imdbID} xs={6} md={4} lg={2} className="text-center">
            <div className="card-container">
              <img
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "default-image.jpg"
                }
                alt={movie.Title}
              />
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
