import React, { useState } from "react";

import { Container } from "react-bootstrap";
import GoToHome from "../../Components/Uitily/GoToHome";
import SearchProductHook from "../../hooks/product/AllProductHook ";
import ProductSearchContainer from "../../Components/Products/ProductSearchContainer";
import PaginationReact from "../../Components/Uitily/pagination-react";

const ProductSearchPage = ({ word, goBack }) => {
  const [newPage, setNewPage] = useState(1);

  const [searchProducts, setCurrentPage] = SearchProductHook(word);

  let totalPages = searchProducts.totalPages;

  const onPress = (page) => {
    setCurrentPage(page);
    setNewPage(page);

    window.scrollTo(0, 0);
  };

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

          <ProductSearchContainer searchProducts={searchProducts} />
        </div>
        {totalPages > 1 ? (
          <div className=" d-flex justify-content-center">
            <PaginationReact
              currentPage={newPage}
              onPress={onPress}
              totalPages={totalPages}
            />
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default ProductSearchPage;
