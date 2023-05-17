import React from "react";
import logo from "../../../../src/noImage.jpg";

const TableCatalog = () => {
  return (
    <div>
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Найменування</th>
                <th scope="col">Категорія</th>
                <th scope="col">Підкатегорія</th>
                <th scope="col">Фото</th>
                <th scope="col">Ціна</th>
                <th scope="col">Дії</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>КТ315</td>
                <td>Транзистор</td>
                <td>NPN</td>
                <td>
                  <img
                    src={logo}
                    class="img-fluid"
                    alt="imag"
                    style={{ height: "40px" }}
                  />
                </td>
                <td>3.50</td>
                <td>
                  {/* <i style={{ color: "#03a9f4", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faPenToSquare} /></i>
                  <i style={{ color: "#E60026", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faTrash} /></i> */}
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>PIC16F628A</td>
                <td>Мікроконтролер</td>
                <td>МС</td>
                <td>
                  <img
                    src={logo}
                    class="img-fluid"
                    alt="imag"
                    style={{ height: "40px" }}
                  />
                </td>
                <td>83.00</td>
                <td>
                  {/* <i style={{ color: "#03a9f4", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faPenToSquare} /></i>
                  <i style={{ color: "#E60026", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faTrash} /></i> */}
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Arduino Nano</td>
                <td>Мікроконтролер</td>
                <td>Модуль</td>
                <td>
                  <img
                    src={logo}
                    class="img-fluid"
                    alt="imag"
                    style={{ height: "40px" }}
                  />
                </td>
                <td>105.00</td>
                <td>
                  {/* <i style={{ color: "#03a9f4", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faPenToSquare} /></i>
                  <i style={{ color: "#E60026", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faTrash} /></i> */}
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>1N4148</td>
                <td>Діод</td>
                <td>Малопотужний</td>
                <td>
                  <img
                    src={logo}
                    class="img-fluid"
                    alt="imag"
                    style={{ height: "40px" }}
                  />
                </td>
                <td>2.00</td>
                <td>
                  {/* <i style={{ color: "#03a9f4", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faPenToSquare} /></i>
                  <i style={{ color: "#E60026", fontSize: "25px" }}>
                  <FontAwesomeIcon icon={faTrash} /></i> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default TableCatalog;
