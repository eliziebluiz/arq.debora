import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ForgotPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 22rem;
  margin-top: 1rem;

  > a {
    color: #933a0e;
  }
`;

export const Button = styled.button`
  background-color: #933a0e;
  color: #ffffff;
  cursor: pointer;

  padding: 0.5rem 2rem;
  border-radius: 1rem;
  margin-top: 4rem;
`;
