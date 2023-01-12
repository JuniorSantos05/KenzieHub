import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import FormModalStyled from "./style";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaCreateTech } from "../../validations";

export const ModalCreateTech = () => {
  const { techCreate, closeModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaCreateTech),
  });

  return (
    <div className="modal">
      <FormModalStyled onSubmit={handleSubmit(techCreate)}>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <span onClick={closeModal}>X</span>
        </div>
        <label htmlFor="title">
          Nome
          <input
            type="text"
            placeholder="nome da tecnologia"
            name="title"
            {...register("title")}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </label>
        <label htmlFor="status">
          Selecionar status
          <select name="status" id="status">
            <option value="Iniciante" {...register("status")}>
              Iniciante
            </option>
            <option value="Intermediário" {...register("status")}>
              Intermediário
            </option>
            <option value="Avançado" {...register("status")}>
              Avançado
            </option>
            {errors.status && <p>{errors.status.message}</p>}
          </select>
        </label>
        <button type="submit">Cadastrar Tecnologia</button>
      </FormModalStyled>
    </div>
  );
};
