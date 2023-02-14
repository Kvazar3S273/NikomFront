import classNames from "classnames";
import React, { useState } from "react";
import "./styleAuth.css";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../constants/actionTypes";

const AuthPage = () => {

    const initState = {
        email: "",
        firstName: "",
        secondName: "",
        photo: null,
        password: "",
        confirmPassword: "",
      };

    const dispatch = useDispatch();

    const onSubmitHandler = (values) => {
        dispatch({type: LOGIN, payload: values.email});
        console.log("values submit", values)
      }

    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const onClickLoginBtn = () => {
        setLogin(true);
        setRegister(false);
    }
    
    const onClickRegisterBtn = () => {
        setLogin(false);
        setRegister(true);
    }

  return (
    <div className="body">
      <div className="page">

        <div className = {classNames( "welcome", {"active": login}, {"":!login})}>
          <h2>NIKOM</h2>
          <p>Для входу в панель користувача потрібно бути зареєстрованим</p>
          <button className={
            classNames( "login_btn", {"active": login}, {"":!login})} 
            onClick={onClickLoginBtn}>Я зареєстрований</button>
          <button className={
            classNames( "register_btn", {"active": login}, {"":!login})} 
            onClick={onClickRegisterBtn}>Зареєструватись</button>
        </div>
        
        <div className={classNames( "register", {"active": login}, {"":!login})}>
          <form>
            <h2>Реєстрація</h2>
            <input type="email" placeholder="Електронна пошта" className="reg-input" required/>
            <input type="text" className="reg-input" placeholder="Ім'я користувача" required/>
            <input type="text" className="reg-input" placeholder="Прізвище" required/>
            <input type="password" className="reg-input" placeholder="Пароль" required/>
            <input type="password" className="reg-input" placeholder="Підтвердження пароля" required/>
            <input type="submit" value="Зареєструватись" className="reg-btn" />
          </form>
        </div>

        <div className = {classNames( "login", {"active": login}, {"":!login})}>
          <form>
            <h2>Вхід</h2>
            <input type="email" className="log-input" placeholder="Електронна пошта" required/>
            <input type="password" className="log-input" placeholder="Пароль" required/>
            <input type="submit" value="Увійти" className="log-btn" />

            {/* <a href="#" className="forg-pass">
              Забули пароль?
            </a> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
