import { Container, Row } from 'react-bootstrap';
import Navigation from '../components/Navbar';
import MovieCard from '../components/MovieCard';

function Movies() {
  const movieData = [
    { 
      title: 'Movie 1', 
      genre: 'Action', 
      rating: 4.5, 
      price: 250,
      imageUrl: '/path/to/movie1.jpg' 
    },
    { 
      title: 'Movie 2', 
      genre: 'Comedy', 
      rating: 4.2, 
      price: 200,
      imageUrl: '/path/to/movie2.jpg'
    },
    // Add more movies as needed
  ];

  return (
    <>
      <Navigation />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {movieData.map((movie, index) => (
            <MovieCard 
              key={index} 
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              price={movie.price}
              imageUrl={movie.imageUrl}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Movies;