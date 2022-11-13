import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Item = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 24px;
  background-color: #d9d9d9;
  margin: 0px auto;
`;
