import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer
        style={{ background: "#191e32" }}
        className="page-footer mt mb-0  text-light   font-small blue pt-4"
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns to organize your
                footer content.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3"></div>

            <div className="col-md-3 mb-md-0 mb-3"></div>
          </div>
        </div>

        <div className="footer-copyright text-center py-2">
          © 2020 Copyright:
          <button className="btn  btn-link" href="#">
            Mr Tutor
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
