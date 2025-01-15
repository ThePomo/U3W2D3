import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Alert, Spinner } from "react-bootstrap";
import "../style.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=766db7eb&i=${movieId}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg3YzVkYzFhNjgzYjAwMTU5MjE3ODUiLCJpYXQiOjE3MzY5NTEyNjAsImV4cCI6MTczODE2MDg2MH0.HFp1V7BOp5Htcq_ACdGUAG_G92BZYDhI8e4pPotWRHg",
            },
          }
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Carico i comment 👾</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="movie-details my-5 mx-auto" style={{ maxWidth: "900px" }}>
      <Row className="text-center">
        <Col md={12}>
          <h2>{movieDetails.Title}</h2>
          <p>{movieDetails.Plot}</p>
          <img
            src={
              movieDetails.Poster !== "N/A"
                ? movieDetails.Poster
                : "default-image.jpg"
            }
            alt={movieDetails.Title}
            className="img-fluid mb-4"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={12}>
          <h3>Commenti</h3>
          <div className="comments-list mt-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="comment-item mb-3 p-3 border rounded"
                >
                  <p>{comment.comment}</p>
                </div>
              ))
            ) : (
              <p>Non ci sono commenti per questo film😩.</p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
