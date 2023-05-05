import React, { useState } from "react";
import "./styles.css";
import ImageUploading from "react-images-uploading";
import { faTrash, faPenToSquare, faCrop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'react-image-crop/dist/ReactCrop.css';
import EasyCrop from "./EasyCrop";
import CreateCategory from "./CreateCategory";
import { useSelector } from "react-redux";

const AddProduct = () => {

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const [imageCrop, setImageCrop] = useState(null);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log("Завантажені зображення: ", imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onCrop = (image) => {
    console.log("Image for crop", image);
    setImageCrop(image.data_url);
    console.log("Image setImageCrop", imageCrop);
    // return(
    //   <div>
    //     {setImageCrop(image) && (
    //     <EasyCrop image = {imageCrop} />)}
    //   </div>
    // );
  }

  

  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Додавання товару</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div>
            <div className="form-group mb-3">
              <label for="name">Найменування:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Введіть назву товару"
              />
            </div>

            <div className="form-group mb-3">
              <label for="category">Категорія:</label>
              <div className="row">
                <div className="col-md-8">
                  <select className="form-control mt-1" id="category">
                    <option value="">Виберіть категорію товару</option>
                    <option value="category1">Транзистори</option>
                    <option value="category2">Діоди</option>
                    <option value="category3">Мікросхеми</option>
                  </select>
                </div>
                <div className="col-md-4 d-grid gap-1 mx-auto mt-1">
                  <button
                    type="button"
                    className="btn btn-warning"
                  >
                    Створити нову категорію
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <label for="subcategory">Підкатегорія:</label>
              <div className="row">
                <div className="col-md-8">
                  <select className="form-control mt-1" id="subcategory">
                    <option value="">Виберіть підкатегорію товару</option>
                    <option value="subcategory1">NPN</option>
                    <option value="subcategory2">PNP</option>
                    <option value="subcategory3">MOSFET</option>
                    <option value="subcategory4">Випрямляч</option>
                    <option value="subcategory5">Мікроконтролер</option>
                  </select>
                </div>
                <div className="col-md-4 d-grid gap-1 mx-auto mt-1">
                  <button type="button" className="btn btn-warning">
                    Створити нову підкатегорію
                  </button>
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <label for="localization">Місце розташування:</label>
              <div className="row">
                <div className="col-md-4">
                  <select className="form-control mt-1" id="localization">
                    <option value="">Виберіть локалізацію товару</option>
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
                <div className="col-md-4 d-grid gap-1 mx-auto">
                  <button type="button" className="btn btn-warning mt-1">
                    Додати нову локалізацію
                  </button>
                </div>
              </div>
            </div>

            <div className="d-grid gap-1 mt-4">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <div className="row">
                      <div className="col-md-8">
                        <div
                          class="mt-4 p-5 bg-warning text-dark text-center rounded"
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          <b>Натисніть на блок</b> <br /> або перетягніть сюди
                          одне чи декілька зображень
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          class="mt-4 p-5 bg-danger text-white text-center rounded"
                          onClick={onImageRemoveAll}
                        >
                          Видалити всі <br /> зображення
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3">
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="col-md-3 col-sm-6 col-6 image-item"
                        >
                          <img
                            src={image["data_url"]}
                            alt="hello"
                            style={{ width: "10vw", height: "10vw" }}
                          />
                          <div className="image-item__btn-wrapper">
                            <button
                              type="button"
                              className="btn btn-primary mb-1"
                              onClick={() => onImageUpdate(index)}
                            >
                              <i style={{ color: "#fff", fontSize: "14px" }}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger mb-1"
                              onClick={() => onImageRemove(index)}
                            >
                              <i style={{ color: "#fff", fontSize: "14px" }}>
                                <FontAwesomeIcon icon={faTrash} />
                              </i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => onCrop(image)}
                            >
                              <i style={{ color: "#fff", fontSize: "14px" }}>
                                <FontAwesomeIcon icon={faCrop} />
                              </i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      {imageCrop != null ? <EasyCrop image={imageCrop} /> : ""}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>

            <div className="form-group mt-3 mb-3">
              <label for="price">Ціна:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Введіть ціну товару"
              />
            </div>

            <div className="d-grid gap-1 mt-4">
              <button type="submit" className="btn btn-lg btn-success">
                Додати товар
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

