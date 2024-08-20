import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../Components/Uitily/NavBar";
import SubTitle from "../../Components/Uitily/SubTitle";

import ProductCardContiner from "../../Components/Products/ProductCardContiner";
import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";
import PaginationReact from "../../Components/Uitily/pagination-react";

const ProductsPage = () => {
  const [hide, setHide] = useState("show-sections");

  const [newPage, setNewPage] = useState(1);

  const [allProducts, setCurrentPage] = ProductCardContinerHook();

  let totalPages = allProducts.totalPages;

  const onPress = (page) => {
    setCurrentPage(page);
    setNewPage(page);

    window.scrollTo(0, 0);
  };

  return (
    <div className="home d-flex flex-column align-content-start">
      <NavBar setHide={setHide} />

      <Container className={hide}>
        <div
          className="home-container "
          style={{
            alignItems: "center",
            flexWrap: "wrap",
            overflow: "auto",
            minHeight: "670px",
          }}
        >
          <SubTitle title={"All Products"} pathTxt={"/"} />
          <ProductCardContiner allProducts={allProducts} />
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

export default ProductsPage;
