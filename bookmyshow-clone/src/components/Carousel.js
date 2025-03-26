import { Carousel } from 'react-bootstrap';

   function MovieCarousel() {
     return (
       <Carousel>
         <Carousel.Item interval={3000}>
           <img className="d-block w-100" src="movie1.jpg" alt="First slide" />
           <Carousel.Caption>
             <h3>Avengers: Endgame</h3>
             <Button variant="primary">Book Now</Button>
           </Carousel.Caption>
         </Carousel.Item>
         {/* Add more Carousel.Items */}
       </Carousel>
     );
   }
   export default MovieCarousel;
   