import { useState } from "react";
import Carousel from "react-bootstrap/Carousel"; // import item from "../../images/item.png";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "de3y9ajne",
  },
});

const slider1 = cld.image("store/store-slide-1_kpzdjb");
const slider2 = cld.image("store/store-slide-2_yhexny");
const slider3 = cld.image("store/store-slide-3_korsjo");
const slider4 = cld.image("store/store-slide-4_tmyvnt");

const slidData = [
  {
    background: "slider-background1",
    title: "Big Sale",
    img: slider1,
    text: "Descount Up To 50%",
  },
  {
    background: "slider-background2",
    title: "Electronic Festival",
    img: slider2,
    text: "All Devices You Need",
  },
  {
    background: "slider-background3",
    title: "Bueaty Hub",
    img: slider3,
    text: "Hear You Are a Queen",
  },
  {
    background: "slider-background4",
    title: "Games Lover",
    img: slider4,
    text: "Don't Stop Gaming",
  },
];

const Silder = ({ hide }) => {
  // const [hide, setHide] = useState("show-sections");

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={hide}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slidData
          ? slidData.map((item, index) => {
              return (
                <Carousel.Item
                  key={index}
                  className={item.background}
                  interval={2000}
                >
                  <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                    <div className="slider-text">
                      <h3 className="slider-title">{item.title}</h3>
                      <p className="slider-desc">{item.text}</p>
                    </div>
                    <div>
                      <AdvancedImage
                        cldImg={item.img}
                        style={{ height: "20em", width: "20em" }}
                      />
                    </div>
                  </div>
                </Carousel.Item>
              );
            })
          : null}
      </Carousel>
    </div>
  );
};

export default Silder;
