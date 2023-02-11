import * as Yup from 'yup';

const validationFields = () => {
  return Yup.object({
    email: Yup.string()
      .email("не коректно вказана пошта")
      .required("Вкажіть пошту"),
    password: Yup.string()
      .required("Вкажіть пароль")
      .min(5, "Пароль надто короткий, не менше 5 символів")
      .matches(/[a-zA-Z]/, "Пароль повинен містити латинські літери")
  });
}

export default validationFields;
