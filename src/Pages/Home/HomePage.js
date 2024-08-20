import React, { useState } from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import HomeProduct from "../../Components/Home/HomeProduct";
import NavBar from "../../Components/Uitily/NavBar";
import OfferBanner from "../../Components/Home/OfferBanner";
import HomeBrand from "../../Components/Home/HomeBrand";
import HomeTopProduct from "../../Components/Home/HomeTopProduct";

const HomePage = () => {
  const [hide, setHide] = useState("show-sections");
  // const [show, setShow] = useState("hide-sections");
  // const [word, setWord] = useState("");

  return (
    <div className="home d-flex flex-column align-content-start">
      {/* <NavBar setHide={setHide} setShow={setShow} setWord={setWord} /> */}
      <NavBar setHide={setHide} />
      <div className={hide}>
        <Slider />
        <HomeCategory />
        <HomeProduct />
        <OfferBanner />
        <HomeTopProduct />
        <HomeBrand />
      </div>

      {/* <div className={show}>
        <ProductSearchPage word={word} />
      </div> */}
    </div>
  );
};

export default HomePage;
