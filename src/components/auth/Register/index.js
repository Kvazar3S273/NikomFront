import { Formik, Form } from "formik";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER } from "../../../constants/actionTypes";
import MyPhotoInput from "../../common/MyPhotoInput";
import { RegisterUser } from "../../../actions/auth";
import EclipseWidget from "../../common/eclipse";

const RegisterPage = () => {
  const initState = {
    email: "",
    firstName: "",
    secondName: "",
    photo: null,
    password: "",
    confirmPassword: "",
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.auth);
  const refFormik = useRef();
  const onSubmitHandler = async (values) => {
    try {

      const formData = new FormData();
      Object.entries(values).forEach(([key, value])=>formData.append(key, value));

      // const result = await authService.register(values);
      // console.log("Server is good", result);
      // dispatch({type: REGISTER, payload: values.email});
      const result = await dispatch(RegisterUser(formData));
      navigator("/");
    } catch (error) {
      console.log("Server is bad", error.response);
    }
  };

  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h2 className="text-center mt-3">Реєстрація</h2>

        <Formik
          innerRef={refFormik}
          initialValues={{ initState }}
          validationSchema={validationFields()}
          onSubmit={onSubmitHandler}
          >
          <Form>
            <MyTextInput
              label="Електронна пошта"
              name="email"
              id="email"
            />
            <MyTextInput
              label="Ім'я"
              name="firstName"
              id="firstName"
            />
            <MyTextInput
              label="Прізвище"
              name="secondName"
              id="secondName"
            />
            <label className="mb-3">Виберіть фото:</label>
            <MyPhotoInput
              refFormik={refFormik}
              field="photo" 
              />
            <MyTextInput
              label="Пароль"
              type="password"
              name="password"
              id="password"
            />
            <MyTextInput 
              label="Підтвердження пароля"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <button type="submit" className="btn btn-primary">
              Зареєструватись
            </button>
          </Form>
        </Formik>
      </div>
      {loading && <EclipseWidget/>}
    </div>
  );
};

export default RegisterPage;
