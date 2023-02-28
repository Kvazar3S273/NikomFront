// import { useField } from "formik";
import React, { useState } from "react";

const MyPhotoInput = ({ 
    refFormik,
    field
 }) => {
    
  const [photo, setPhoto] = useState("https://www.suzukijember.com/gallery/gambar_product/default.jpg");
  
  const onChangeHandler = (event) => {
    const file = event.currentTarget.files[0];
    setPhoto(URL.createObjectURL(file));
    refFormik.current.setFieldValue(field, file);

  }
  
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        <img src= {photo}
            alt="Default"
            width="200px"
            style={{cursor:"pointer"}}/>
      </label>

      <input 
        type="file" 
        id={field} 
        name={field} 
        className="d-none"
        onChange={onChangeHandler}
      />

      
    </div>
  );
};

export default MyPhotoInput;
