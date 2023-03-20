import { Formik, Form } from "formik";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import authService from "../../../services/auth.service";
import MyTextInput from "../../common/MyTextInput";
import validationFields from "./validation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ERRORS } from "../../../constants/actionTypes";
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
  const { loading, errorvalid } = useSelector(state => state.auth);
  const refFormik = useRef();
  const titleRef = useRef();
  
  const onSubmitHandler = (values) => {

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      console.log("key values", values);
      // dispatch({type: REGISTER, payload: values.email});
      dispatch(RegisterUser(formData))
      .then(result =>
        {
          console.log("Result",result);
          navigator("/");
        })
        .catch(ex => {
          console.log("erre",ex);
          let answer_errors = {
            email: ''
          };
          Object.entries(ex.errors).forEach(([key, values]) => {
            console.log("[key]", key);
            console.log("[val]", values);
            let str = '';

            values.forEach(text => {
              str += text + " ";
            });
            answer_errors.email = str;
            dispatch({ type: ERRORS, payload: answer_errors.email });
          })
        })
        titleRef.current.scrollIntoView({ behavior: 'smooth' });
    } catch (problem) {
      var res = problem.response.data.errors;
      console.log("Another errors:", res);
    }
  }

  useEffect(() => {
    refFormik.current.setErrors({
       "email": errorvalid           
    })   
    console.log("useess",errorvalid); 
    
  }, [errorvalid]); 



  return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h2 className="text-center mt-3">Реєстрація</h2>

        <Formik
          innerRef={refFormik}
          initialValues={ initState }
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
