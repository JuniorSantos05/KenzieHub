import { Link } from "react-router-dom";
import { FormStyled } from "../../styles/form";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaSignup } from "../../validations";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ISignupData, UserContext } from "../../providers/UserContext";

export const SignupPage = () => {
  const { Signup } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupData>({
    resolver: yupResolver(formSchemaSignup),
  });

  return (
    <div>
      <header>
        <h1>Kenzie Hub</h1>
        <Link className="btnVoltar" to={"/"}>
          Voltar
        </Link>
      </header>

      <FormStyled onSubmit={handleSubmit(Signup)}>
        <h1>Crie Sua Conta</h1>
        <span>Rápido, grátis e fácil</span>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            placeholder="Digite seu Nome"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

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
            type="text"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <label htmlFor="password">
          Confirme sua senha
          <input
            type="password"
            id="password"
            placeholder="repita sua senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </label>
        <label htmlFor="bio">
          Bio
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio && <p>{errors.bio.message}</p>}
        </label>
        <label htmlFor="contato">
          Contato
          <input
            type="text"
            id="contato"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact && <p>{errors.contact.message}</p>}
        </label>
        <select name="course_module" id="course_module">
          <option
            value="Primeiro módulo (Introdução ao Frontend)"
            {...register("course_module")}
          >
            Primeiro módulo
          </option>
          <option
            value="Segundo módulo (Frontend Avançado)"
            {...register("course_module")}
          >
            Segundo módulo
          </option>
          <option
            value="Terceiro módulo (Introdução ao Backend)"
            {...register("course_module")}
          >
            Terceiro módulo
          </option>
          <option
            value="Quarto módulo (Backend Avançado)"
            {...register("course_module")}
          >
            Quarto módulo
          </option>
          {errors.course_module && <p>{errors.course_module.message}</p>}
        </select>

        <button type="submit">Cadastrar</button>
      </FormStyled>
    </div>
  );
};
