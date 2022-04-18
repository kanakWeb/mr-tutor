import React from "react";
import { Link } from "react-router-dom";

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
              <h5 className="text-uppercase">Tutor or tution Content</h5>
              <p>
              Get connected with us on social Mr Tutor ::
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3"></div>
            <Link to='/services' className=" text-decoration-none  fw-bold text-white" >Click Here is the best service
          </Link>
            <div className="col-md-3 mb-md-0 mb-3"></div>
          </div>
        </div>
        <hr />
        <div className="footer-copyright text-center py-2">
          © 2020 Copyright :
          <Link to='/' className="btn fw-bold text-warning" >Mr Tutor
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
