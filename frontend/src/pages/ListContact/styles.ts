import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #933a0e;
  color: #ffffff;
  cursor: pointer;

  padding: 0.5rem 2rem;
  border-radius: 1rem;
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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  > h4 {
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 10px;
  }
`;
