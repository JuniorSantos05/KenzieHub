import styled from "styled-components";

const FormModalStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  max-width: 360px;

  background: var(--Grey-3);
  box-shadow: 0px 3.2px 32px -8px rgba(0, 0, 0, 0.25);

  width: 300px;

  padding: 0px 11px 50px 11px;
  margin: 80px auto;
  gap: 16px;

  border: 1px solid var(--Grey-3);
  border-radius: 3.5px;

  animation: modal 1s;

  @keyframes modal {
    0% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--Grey-2);

    width: 100%;

    padding: 0 10px;

    border-radius: 3.5px 3.5px 0 0;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;

    color: var(--Grey-0);
  }

  span {
    color: #868e96;

    text-align: center;
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
  }

  label {
    display: flex;
    flex-direction: column;

    position: relative;

    width: 100%;

    text-align: left;
    font-size: 12px;

    gap: 10px;
  }

  input {
    padding: 10px 5px;

    height: 25px;

    background: var(--Grey-2);
    color: var(--Grey-0);

    border: 1px solid var(--Grey-0);
    border-radius: 3.2px;
  }

  select {
    width: 100%;
    height: 45px;

    padding: 10px 5px;

    background: var(--Grey-2);

    border: 1px solid var(--Grey-0);
    border-radius: 3.2px;

    color: #868e96;

    option {
      color: white;
    }
  }

  p {
    font-size: 10px;
    font-weight: 500;

    color: var(--Negative);
  }

  button {
    padding: 10px;

    width: 100%;
    height: 40px;

    background: var(--Color-primary);

    color: var(--Grey-0);

    font-weight: 400;

    border: 1px solid var(--Color-primary);
    border: 1px solid var(--Color-primary);
    border-radius: 3.2px;

    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: var(--Color-primary-Focus);

      border: 1px solid var(--Color-primary-Focus);
    }
  }
`;

export default FormModalStyled;
