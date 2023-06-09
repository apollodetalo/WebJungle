import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Chuwi 100 GB 7 inch Smart Gaming Tablet
                </h5>
                <h6 className="price">$1000</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Chuwi 100 GB 7 inch Smart Gaming Tablet
                </h5>
                <h6 className="price">$1000</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                className="position-absolute cross img-fluid"
                src="images/cross.svg"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt=""
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Chuwi 100 GB 7 inch Smart Gaming Tablet
                </h5>
                <h6 className="price">$1000</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
