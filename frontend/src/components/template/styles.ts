import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f3f1f0;
  border-radius: 10px;
  padding: 70px 20px;
  min-width: 520px;
  margin: 50px 0px;

  > img {
    width: 8rem;
    margin-bottom: 3rem;
  }
`;
