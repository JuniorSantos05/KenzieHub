/* eslint-disable array-callback-return */
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import "./style.css";
import { BsTrashFill } from "react-icons/bs";
import { TechContext } from "../../providers/TechContext";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import Loading from "../../components/Loading";
import { Navigate } from "react-router-dom";

export const HomePage = () => {
  const { loggedUser, loading, logout, userTechs } = useContext(UserContext);
  const { techDelete, showModal, setShowModal, techUpdate } =
    useContext(TechContext);

  if (loading) {
    return <Loading />;
  }
  if (!loggedUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      {showModal ? <ModalCreateTech /> : null}
      <header>
        <h1>Kenzie Hub</h1>
        <button className="btnSair" onClick={logout}>
          Sair
        </button>
      </header>
      <section>
        <h1>Olá, {loggedUser?.name}</h1>
        <span>{loggedUser?.course_module}</span>
      </section>
      <main>
        <nav>
          <h2>Tecnologias</h2>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            +
          </button>
        </nav>
        <ul>
          {userTechs.map((tech) => (
            <li key={tech.id} id={tech.id}>
              <span>{tech.title}</span>
              <div>
                <p onClick={techUpdate}>{tech.status}</p>
                <BsTrashFill
                  onClick={() => {
                    techDelete(tech);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
