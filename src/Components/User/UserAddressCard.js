import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import deleteiconwhite from "../../images/delete-white.png";
import updatewhite from "../../images/updated.png";
import update from "../../images/changes.png";
import { DeleteAddressHook } from "../../hooks/user/UserAddressesHooks";
import { ToastContainer } from "react-toastify";

const UserAddressCard = ({
  addId,
  alias,
  city,
  details,
  phone,
  postalCode,
}) => {
  const [deleteAdd] = DeleteAddressHook(addId);
  return (
    <div className=" user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between pt-3 px-2 ">
        <Col xs="9">
          <div className="">{alias}</div>
        </Col>
        <Col sm="3" className="d-flex justify-content-end align-items-end ">
          <Link
            to={`/user/edit-address/${addId}`}
            style={{ textDecoration: "none" }}
          >
            <button
              type="button"
              class="btn btn-outline-dark"
              // onClick={DelAllCartItem}
            >
              <div className="d-flex no-weap align-items-start lock">
                {" "}
                <img
                  src={update}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-unlock "
                />
                <img
                  src={updatewhite}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-lock"
                />
                <span className="px-1">Update</span>
              </div>
            </button>
          </Link>
        </Col>
      </Row>

      <Row className="d-flex justify-content-between ">
        <Col xs="9" className="d-flex align-items-start">
          <div
            style={{
              paddingLeft: "0.5em",
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "1em",
            }}
          >
            Adress :
          </div>
          <div className="p-1 align-self-center item-delete-edit">
            {details}
          </div>
          <div className="p-1 align-self-center item-delete-edit">{city}</div>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" className="d-flex mx-2">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {phone}
          </div>
        </Col>
      </Row>
      <Row className="mt-2  px-2">
        <Col xs="8" className="d-flex ">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Postal Code :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
              marginLeft: "0.5em",
            }}
          >
            {postalCode}
          </div>
        </Col>

        <Col sm="4" className="d-flex justify-content-end align-items-end pb-3">
          <Link to="#" style={{ textDecoration: "none" }}>
            <button
              type="button"
              class="btn btn-outline-dark"
              onClick={deleteAdd}
            >
              <div className="d-flex no-weap align-items-start  lock">
                {" "}
                <img
                  src={deleteicon}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-unlock"
                />
                <img
                  src={deleteiconwhite}
                  alt=""
                  width="20px"
                  height="24px"
                  className="icon-lock "
                />
                <span className="" style={{ paddingLeft: "0.75em" }}>
                  Delete
                </span>
              </div>
            </button>
          </Link>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserAddressCard;
