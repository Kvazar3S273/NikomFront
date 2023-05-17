import React from "react";
import logo from "../../../../src/noImage.jpg";
import { Link } from "react-router-dom";

const CardsCatalog = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 col-sm-4 col-md-3 bg-light rounded mt-2 mb-2">
          <Link
            aria-current="page"
            to="/item"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар1" />
              <h4 class="card-header">КТ315</h4>
              <div className="card-body-photo m-3">
                <h6 className="card-title ">Транзистор</h6>
                <h6 className="card-title ">NPN</h6>
                {/* <Link to="/catalog" class="btn btn-primary">В кошик</Link> */}
              </div>
              <h4 class="card-header text-end">3.50 грн</h4>
            </div>
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-md-3 bg-light rounded mt-2 mb-2">
          <Link
            aria-current="page"
            to="/item"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар2" />
              <h4 class="card-header">PIC16F628A</h4>
              <div className="card-body-photo m-3">
                <h6 className="card-title ">Мікроконтролер</h6>
                <h6 className="card-title ">МС</h6>
              </div>
              <h4 class="card-header text-end">83.00 грн</h4>
            </div>
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-md-3 bg-light rounded mt-2 mb-2">
          <Link
            aria-current="page"
            to="/item"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар3" />
              <h4 class="card-header">Arduino Nano</h4>
              <div className="card-body-photo m-3">
                <h6 className="card-title ">Мікроконтролер</h6>
                <h6 className="card-title ">Модуль</h6>
              </div>
              <h4 class="card-header text-end">105.00 грн</h4>
            </div>
          </Link>
        </div>
        <div className="col-6 col-sm-4 col-md-3 bg-light rounded mt-2 mb-2">
          <Link
            aria-current="page"
            to="/item"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар4" />
              <h4 class="card-header">1N4148</h4>
              <div className="card-body-photo m-3">
                <h6 className="card-title ">Діод</h6>
                <h6 className="card-title ">Малопотужний</h6>
              </div>
              <h4 class="card-header text-end">2.00 грн</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsCatalog;
