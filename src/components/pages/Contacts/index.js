import React, { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";

const Contacts = () => {
  const [image, setImage] = useState(null);
  const handleImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <h1>Сторінка Контакти</h1>

      {/* <div className="Appshka">
        <header className="Appshka-header">
          <label className="_coverImage-holder">
            Upload Image
            <input
              type="file"
              name="cover"
              onChange={handleImageUpload}
              accept="img/*"
              style={{ display: "none" }}
            />
          </label>
          <EasyCrop image={image} />
        </header>
      </div> */}
    </div>
  );
};

export default Contacts;
