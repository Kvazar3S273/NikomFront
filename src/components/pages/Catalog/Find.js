import React from "react";

const Find = () => {
  return (
    <div className="container ">
      <h3 className="text-center">Пошук товару</h3>
      <h5 className="mt-3">Категорія</h5>
      <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Всі категорії</option>
        <option value="1">Транзистори</option>
        <option value="2">Діоди</option>
        <option value="3">Конденсатори</option>
        <option value="4">Мікросхеми</option>
      </select>
      <h5>Підкатегорія</h5>
      <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Всі підкатегорії</option>
        <option value="1">NPN</option>
        <option value="2">PNP</option>
        <option value="3">MOSFET</option>
        <option value="4">Германієві</option>
        <option value="5">Кремнієві</option>
      </select>
      <h5>Місцезнаходження</h5>
      <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Всі місця</option>
        <option value="1">Склад</option>
        <option value="2">Магазин</option>
        <option value="3">Ангар</option>
        <option value="4">Підвал</option>
      </select>
      <h5>Комірка</h5>
      <select class="form-select mb-3" aria-label="Default select example">
        <option selected>Всі комірки</option>
        <option value="1">12А</option>
        <option value="2">28Р</option>
        <option value="3">162Ф</option>
        <option value="4">203</option>
        <option value="5">Р25</option>
      </select>
      <div className="d-grid gap-1 mt-4">
        <button type="submit" className="btn btn-lg btn-warning">
          Знайти
        </button>
      </div>
    </div>
  );
};

export default Find;
