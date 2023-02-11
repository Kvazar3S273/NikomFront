import React from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../../common/MyTextInput";
import * as Yup from 'yup';

const LoginPage = () => {
  return (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <h2 className="text-center mt-3">Вхід на сайт</h2>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema = {Yup.object({
            email: Yup.string()
              .email("не коректно вказана пошта")
              .required("Вкажіть пошту"),
            password: Yup.string()
              .required("Вкажіть пароль")
              .min(5, "Пароль надто короткий, не менше 5 символів")
              .matches(/[a-zA-Z]/, "Пароль повинен містити латинські літери")
          })}
          onSubmit={(values)=>{
            console.log("values submit", values)
          }}
        >
          <Form>
            <MyTextInput label="Пароль" name="email" type="text" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
