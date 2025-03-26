import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MovieCard({ title, genre, rating, price, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img 
        variant="top" 
        src={imageUrl || 'https://via.placeholder.com/300x450'} 
        alt={title}
        style={{ height: '450px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {genre} | Rating: {rating}/5
        </Card.Text>
        <Button variant="primary">Book Now (₹{price})</Button>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
};

export default MovieCard;