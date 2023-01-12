import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 360px;

  background: var(--Grey-3);
  box-shadow: 0px 3.2px 32px -8px rgba(0, 0, 0, 0.25);

  width: 300px;

  padding: 35px 18px;
  margin: auto;
  gap: 16px;

  border: 1px solid var(--Grey-3);
  border-radius: 3.5px;

  h1 {
    font-size: 20px;
    font-weight: 700;

    color: var(--Grey-0);
  }

  span {
    color: #868e96;

    text-align: center;
    font-size: 12px;
  }

  label {
    display: flex;
    flex-direction: column;

    position: relative;

    width: 100%;

    text-align: left;
    gap: 10px;

    svg {
      position: absolute;

      color: var(--Grey-0);

      top: 47px;
      left: 275px;

      cursor: pointer;
    }
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
    height: 50px;

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

  a {
    display: flex;
    flex-direction: column;

    background-color: #868e96;
    color: var(--Grey-0);

    border: 1px solid #868e96;
    border-radius: 3.2px;

    &:hover {
      background-color: var(--Grey-2);

      border: 1px solid var(--Grey-2);
    }

    width: 100%;

    padding: 10px;
    gap: 10px;

    text-decoration: none;
    text-align: center;
    font-size: 12px;
    color: white;

    transition: all 0.5s;

    span {
      color: #868e96;

      text-align: center;
      font-size: 12px;

      &:hover {
        color: var(--Grey-0);
      }
    }
  }

  button {
    padding: 10px;

    width: 100%;
    height: 40px;

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
