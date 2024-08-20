import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import NavBar from "../../Components/Uitily/NavBar";
import PaginationReact from "../../Components/Uitily/pagination-react";
import SubTitle from "../../Components/Uitily/SubTitle";
import CategoryContainerHook from "../../hooks/category/CategoryContainerHook";

const CategoryPage = () => {
  const [hide, setHide] = useState("show-sections");

  const [newPage, setNewPage] = useState(1);

  const [allCategory, setCurrentPage] = CategoryContainerHook();

  let categories = allCategory;

  let totalPages = allCategory.totalPages;

  const onPress = (page) => {
    setCurrentPage(page);
    setNewPage(page);

    window.scrollTo(0, 0);
  };

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
          <SubTitle title={"All Categories"} pathTxt={"/"} />
          <CategoryContainer categories={categories} />
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

export default CategoryPage;
