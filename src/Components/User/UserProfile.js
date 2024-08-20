import React from "react";
import { Row, Col } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import deleteiconwhite from "../../images/delete-white.png";
import updatewhite from "../../images/updated.png";
import update from "../../images/changes.png";
import { Link } from "react-router-dom";
import { DelUserHook } from "../../hooks/user/UserEditDelProfileHook";

const UserProfile = () => {
  const dataUser = localStorage.getItem("user");
  let userName;
  let userEamil;
  let userID;

  if (dataUser) {
    userName = JSON.parse(dataUser)["name"];
    userEamil = JSON.parse(dataUser)["email"];
    userID = JSON.parse(dataUser)["id"];
  }

  const [DelUser] = DelUserHook(userID);

  return (
    <div className="admin-profile">
      <div className="admin-content-text">Your Profile</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2 mx-1 my-1">
          <Col xs="9" className="d-flex align-items-center">
            <div className="p-2">Name :</div>
            <div className="p-1 item-delete-edit">{userName}</div>
          </Col>
          <Col sm="3" className="d-flex justify-content-end align-items-end">
            <Link to="/user/edit-profile" style={{ textDecoration: "none" }}>
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

        <Row className="d-flex justify-content-between mx-1 my-1">
          <Col xs="9" className="d-flex align-items-center">
            <div className="p-2">email :</div>
            <div className="p-1 item-delete-edit">{userEamil}</div>
          </Col>
          <Col sm="3" className="d-flex justify-content-end align-items-end">
            <Link to="#" style={{ textDecoration: "none" }}>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={DelUser}
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
        {/* <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="mt-4">
            <div className="admin-content-title2">Change Password</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Old Password"
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="New Password"
            />
          </Col>
        </Row> */}
        {/* <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">submite</button>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default UserProfile;
