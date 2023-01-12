// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { FormStyled } from "../../styles/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginButton } from "../../styles/Buttons/btnLogin";
import "./style.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { formSchemaLogin } from "../../validations";
import "react-toastify/dist/ReactToastify.css";
import { IloginData, UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const { Login } = useContext(UserContext);
  const [typePass, setTypePass] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <div>
      <header>
        <h1>Kenzie Hub</h1>
      </header>

      <FormStyled onSubmit={handleSubmit(Login)}>
        <h1>Login</h1>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label htmlFor="password">
          Senha
          <input
            type={typePass}
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {typePass === "password" ? (
            <AiFillEye
              onClick={() => {
                setTypePass("text");
              }}
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => {
                setTypePass("password");
              }}
            />
          )}
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <LoginButton type="submit">Entrar</LoginButton>
        <span>Ainda não é cadastrado?</span>
        <Link to={"/SignupPage"} className="btnSignup">
          Cadastrar
        </Link>
      </FormStyled>
    </div>
  );
};
