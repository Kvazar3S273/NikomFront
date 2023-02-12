import * as Yup from "yup";

const validationFields = () => {
  return Yup.object({
    email: Yup.string()
      .email("не коректно вказана пошта")
      .required("Вкажіть пошту"),
    password: Yup.string()
      .required("Вкажіть пароль")
      .min(5, "Пароль надто короткий, не менше 5 символів")
      .matches(/[a-zA-Z]/, "Пароль повинен містити латинські літери"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Не співпадає з введеним паролем")
      .required("Потрібно підтвердити пароль"),
    firstName: Yup.string()
      .required("Вкажіть ім'я"),
    secondName: Yup.string()
      .required("Вкажіть ім'я")
  });
};

export default validationFields;
