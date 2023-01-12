import * as yup from "yup";

export const formSchemaSignup = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup
    .string()
    .email("Digite um Email Válido")
    .required("Campo Obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{6,}/, "Deve ter no minimo 6 digitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("Campo Obrigatório"),
  contact: yup.string().required("Campo Obrigatório"),
  course_module: yup
    .string()
    .required("Obrigatória a seleção de um dos campos"),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email Obrigatório"),
  password: yup.string().required("Senha obrigatória").min(6),
});

export const formSchemaCreateTech = yup.object().shape({
  title: yup.string().required("Campo Obrigatório"),
  status: yup.string().required("Obrigatório a seleção de uma das opções"),
});
