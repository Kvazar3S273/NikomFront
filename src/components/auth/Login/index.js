import React from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../constants/actionTypes";

const LoginPage = () => {
  const initState = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  
  const onSubmitHandler = (values) => {
    dispatch({type: LOGIN, payload: values.email});
    console.log("values submit", values)
  }

  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Вхід на сайт</h2>
        <Formik
          initialValues={{initState}}
          validationSchema={validationFields()}
          onSubmit={onSubmitHandler}
        >
          <Form>
            <MyTextInput 
              label="Пошта" 
              id="email" 
              name="email" 
              type="text" />
            <MyTextInput
              label="Пароль"
              id="password"
              name="password"
              type="password"
            />
            <input
              type="submit"
              className="btn btn-success"
              value="Вхід"
            ></input>
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
