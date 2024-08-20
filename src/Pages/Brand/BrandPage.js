import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../Components/Uitily/NavBar";
import SubTitle from "../../Components/Uitily/SubTitle";
import BrandContainer from "../../Components/Brands/BrandContainer";
import BrandContainerHook from "../../hooks/Brand/BrandContainerHook";
import PaginationReact from "../../Components/Uitily/pagination-react";
import Pagination from "react-bootstrap/Pagination";

const BrandPage = () => {
  const [hide, setHide] = useState("show-sections");

  const [newPage, setNewPage] = useState(1);

  const [allBrand, setCurrentPage] = BrandContainerHook();

  console.log(allBrand);

  let totalPages = allBrand.totalPages;

  const onPress = (page) => {
    setCurrentPage(page);
    setNewPage(page);

    window.scrollTo(0, 0);
  };

  let brands = allBrand;

  return (
    <div className=" d-flex flex-column align-content-start">
      <NavBar setHide={setHide} />

      <Container className={hide}>
        <div
          className="category-page-container "
          style={{
            alignItems: "center",
            flexWrap: "wrap",
            overflow: "auto",
            minHeight: "670px",
          }}
        >
          <SubTitle title={"All Brands"} pathTxt={"/"} />
          <BrandContainer brands={brands} cPage={newPage} />
          {totalPages > 1 ? (
            <div className=" d-flex justify-content-center">
              <PaginationReact
                currentPage={newPage}
                onPress={onPress}
                totalPages={totalPages}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default BrandPage;
