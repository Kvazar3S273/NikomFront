import React from "react";
import Apt from "./Apt";

const SingleProductPage = () => {
  return (
    <div>
      {/* <h1 className="text-center mt-3">Інформація про товар</h1> */}
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-sm-5 col-md-5 col-lg-4">
            {/* <Apt /> */}
            <img src="/images/products/transistors/fullsize/kt315-1.jpg" style={{width: "100%"}} alt="KT315"/>
          </div>
          <div className="col-12 col-sm-7 col-md-7 col-lg-8">
            <h3>Транзистор NPN KT315</h3>
            <p>
              Вже давно відомо, що читабельний зміст буде заважати зосередитись
              людині, яка оцінює композицію сторінки. Сенс використання Lorem
              Ipsum полягає в тому, що цей текст має більш-менш нормальне
              розподілення літер на відміну від, наприклад, "Тут іде текст. Тут
              іде текст." Це робить текст схожим на оповідний. Багато програм
              верстування та веб-дизайну використовують Lorem Ipsum як зразок і
              пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які
              знаходяться ще в зародковому стані. Різні версії Lorem Ipsum
              з'явились за минулі роки, деякі випадково, деякі було створено
              зумисно (зокрема, жартівливі).
            </p>

            <div className="row">
              <div className="col-md-7">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Категорія</th>
                      <td>Транзистори</td>
                    </tr>
                    <tr>
                      <th scope="row">Підкатегорія</th>
                      <td>NPN</td>
                    </tr>
                    <tr>
                      <th scope="row">Місцезнаходження</th>
                      <td>Магазин</td>
                    </tr>
                    <tr>
                      <th scope="row">Комірка</th>
                      <td>АВ34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-5"></div>
            </div>

            <h3>3.50 грн</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
