import { Formik, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../../constants/actionTypes";

const RegisterPage = () => {
  const initState = {
    email: "",
    firstName: "",
    secondName: "",
    password: "",
    confirmPassword: "",
  };

  // const history = useHistory();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values);
      console.log("Server is good", result);
      dispatch({type: REGISTER, payload: values.email});
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
    </div>
  );
};

export default RegisterPage;
