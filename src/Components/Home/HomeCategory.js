import React from "react";
import { Container } from "react-bootstrap";
import SubTitle from "../Uitily/SubTitle";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import CategoryContainerHook from "../../hooks/category/CategoryContainerHook";

const HomeCategory = ({ title, btnTxt, pathTxt, numOfCat }) => {
  const [allCategory, setCurrentPage] = CategoryContainerHook();

  let categories = allCategory;
  return (
    <Container>
      <div
        className="home-container "
        style={{ alignItems: "center", flexWrap: "wrap", overflow: "auto" }}
      >
        <SubTitle
          title={"Top Categories"}
          btnTxt={"See all categories"}
          pathTxt={"/category"}
        />
        <CategoryContainer categories={categories} />
      </div>
    </Container>
  );
};

export default HomeCategory;
