import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Section from "./components/SectionGenres";
import MovieGallery from "./components/MovieGallery";
import ProfilePage from "./components/ProfilePage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TVShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";
const App = () => {
  console.log("App component rendered");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <Container>
                <h2 className="my-3 mx-4">Trending Now</h2>
                <MovieGallery searchQuery="harry potter" />
                <h2 className="my-3 mx-4">Top Movies</h2>
                <MovieGallery searchQuery="avengers" />
                <h2 className="my-3 mx-4">Horror Movies</h2>
                <MovieGallery searchQuery="halloween" />
                <h2 className="my-3 mx-4">Watch it Again</h2>
                <MovieGallery searchQuery="lord of the rings" />
                <h2 className="my-3 mx-4">New Releases</h2>
                <MovieGallery searchQuery="the matrix" />
                <h2 className="my-3 mx-4">Best Comedy</h2>
                <MovieGallery searchQuery="American pie" />
                <h2 className="my-3 mx-4">Must Watch Anime</h2>
                <MovieGallery searchQuery="one piece" />
              </Container>
              <Footer />
            </>
          }
        />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
