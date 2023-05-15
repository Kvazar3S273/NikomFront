import React from "react";
import logo from "../../../../src/logoN.png";

const CardsCatalog = () => {
  return (
    <div>
      <h2 className="text-center mt-3 mb-3">
        Каталог товарів у вигляді карток
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 bg-light rounded ">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар1" />
              <div className="card-body-photo m-3">
                <h4 className="card-title text-center">КТ315</h4>
                <h6 className="card-title ">Транзистор</h6>
                <h6 className="card-title ">NPN</h6>
                <h4 className="card-title text-center">3.50 грн</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 bg-light rounded ">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар1" />
              <div className="card-body-photo m-3">
                <h4 className="card-title text-center">PIC16F628A</h4>
                <h6 className="card-title ">Мікроконтролер</h6>
                <h6 className="card-title ">МС</h6>
                <h4 className="card-title text-center">83.00 грн</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 bg-light rounded ">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар1" />
              <div className="card-body-photo m-3">
                <h4 className="card-title text-center">Arduino Nano</h4>
                <h6 className="card-title ">Мікроконтролер</h6>
                <h6 className="card-title ">Модуль</h6>
                <h4 className="card-title text-center">105.00 грн</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-3 bg-light rounded ">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Товар1" />
              <div className="card-body-photo m-3">
                <h4 className="card-title text-center">1N4148</h4>
                <h6 className="card-title ">Діод</h6>
                <h6 className="card-title ">Малопотужний</h6>
                <h4 className="card-title text-center">2.00 грн</h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardsCatalog;
