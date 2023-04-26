import React from "react";
import "react-image-crop/dist/ReactCrop.css";

const UpdateProduct = () => {
  
  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Редагування товару</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div>
            <div className="form-group mb-3">
              <label for="name">Найменування:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Змініть назву товару"
              />
            </div>

            <div className="form-group mb-3">
              <label for="category">Категорія:</label>
              <select className="form-control mt-1" id="category">
                <option value="">Виберіть нову категорію товару</option>
                <option value="category1">Транзистори</option>
                <option value="category2">Діоди</option>
                <option value="category3">Мікросхеми</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label for="subcategory">Підкатегорія:</label>
              <select className="form-control mt-1" id="subcategory">
                <option value="">Виберіть нову підкатегорію товару</option>
                <option value="subcategory1">NPN</option>
                <option value="subcategory2">PNP</option>
                <option value="subcategory3">MOSFET</option>
                <option value="subcategory4">Випрямляч</option>
                <option value="subcategory5">Мікроконтролер</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label for="localization">Місце розташування:</label>
              <div className="row">
                <div className="col-md-8">
                  <select className="form-control mt-1" id="localization">
                    <option value="">Виберіть нову локалізацію товару</option>
                    <option value="localization1">Склад</option>
                    <option value="localization2">Торговий зал</option>
                    <option value="localization3">Постачальники</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="name"
                    placeholder="Введіть № комірки"
                  />
                </div>
              </div>
            </div>

            <div className="form-group mt-3 mb-3">
              <label for="price">Ціна:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Введіть нову ціну товару"
              />
            </div>

            <div className="d-grid gap-1 mt-4">
              <button type="submit" className="btn btn-lg btn-success">
                Застосувати зміни
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
