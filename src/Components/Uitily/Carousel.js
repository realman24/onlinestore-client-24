import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import item from "../../images/item.png";

const MyCarousel = () => {
  return (
    <div className="product-gallary-card ">
      <div className="gallary-card d-flex justfiy-content-center align-items-center">
        <Carousel>
          <Carousel.Item>
            <img src={item} className="login-img" alt="sfvs" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={item} className="login-img" alt="sfvs" />

            {/* <ExampleCarouselImage text="Second slide" /> */}
            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img src={item} className="login-img" alt="sfvs" />

            {/* <ExampleCarouselImage text="Third slide" /> */}
            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MyCarousel;
