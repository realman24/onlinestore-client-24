import React from "react";

import { Container } from "react-bootstrap";
import GoToHome from "../../Components/Uitily/GoToHome";
import AllProductHook from "../../hooks/product/AllProductHook ";
import ProductSearchContainer from "../../Components/Products/ProductSearchContainer";

const ProductSearchPage = ({ word, goBack }) => {
  const [allTotalProducts] = AllProductHook(word);

  return (
    <div className="home d-flex flex-column align-content-start">
      {/* <NavBar /> */}

      <Container>
        <div
          className="home-container "
          style={{
            alignItems: "center",
            flexWrap: "wrap",
            overflow: "auto",
            minHeight: "670px",
          }}
        >
          {/* <GoToHome pathTxt={"/"} btnTxt={"Back To Home Page"} /> */}
          <GoToHome
            pathTxt={"#"}
            btnTxt={"Back To Previous Page"}
            onClick={goBack}
          />
          {/* <p onClick={goBack}>Go Back</p> */}

          <ProductSearchContainer allTotalProducts={allTotalProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductSearchPage;
