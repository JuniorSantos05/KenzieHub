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
    <div className="modal" onClick={closeModal}>
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
          <select name="status" id="status" {...register("status")}>
            <option value="">Selecionar Status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <p>{errors.status.message}</p>}
        </label>
        <button type="submit">Cadastrar Tecnologia</button>
      </FormModalStyled>
    </div>
  );
};
