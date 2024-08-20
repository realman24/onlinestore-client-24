import React from "react";
import { Link } from "react-router-dom";

const GoToHome = ({ btnTxt, pathTxt }) => {
  return (
    <div className="d-flex justify-content-end align-items-center pt-4 subtitle-dev">
      <div className="subtile-txt"></div>
      {btnTxt ? (
        <Link
          to={`${pathTxt}`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            window.location.reload();
            window.scroll(0, 0);
          }}
        >
          <div className=" align-content-center shopping-now ">{btnTxt}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default GoToHome;
