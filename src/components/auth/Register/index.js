import React from "react";
import { Component } from "react";
import MyTextInput from "../../common/MyTextInput";

export class RegisterPage extends Component {
  state = {
    email: "",
    firstName: "",
    secondName: "",
    password: "",
    confirmPassword: "",
  };

  onChangeHandler = (e) => {
    // console.log("onChange name", e.target.name);
    // console.log("onChange value", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("state ", this.state);
    const {
      email,
      firstName,
      secondName,
      password,
      confirmPassword,
    } = this.state;

    return (
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <h2 className="text-center mt-3">Реєстрація</h2>
          <form>
            <MyTextInput
              field="email"
              label="Електронна пошта"
              value={email}
              onChangeHandler={this.onChangeHandler}
            />
            <MyTextInput
              field="firstName"
              label="Ім'я"
              value={firstName}
              onChangeHandler={this.onChangeHandler}
            />
            <MyTextInput
              field="secondName"
              label="Прізвище"
              value={secondName}
              onChangeHandler={this.onChangeHandler}
            />
            <MyTextInput
              field="password"
              type="password"
              label="Пароль"
              value={password}
              onChangeHandler={this.onChangeHandler}
            />
            <MyTextInput
              field="confirmPassword"
              type="password"
              label="Підтвердження пароля"
              value={confirmPassword}
              onChangeHandler={this.onChangeHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
