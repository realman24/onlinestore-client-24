import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTxt, pathTxt }) => {
  return (
    <div className="d-flex justify-content-start align-items-center pt-4 subtitle-dev">
      <div className="subtile-txt">{title}</div>
      {btnTxt ? (
        <Link
          to={`${pathTxt}`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <div className=" align-content-center shopping-now ">{btnTxt}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;
