import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f3f1f0;
  border-radius: 10px;
  padding: 40px;
  width: 75%;
  min-width: 520px;
  min-height: 400px;

  margin: 50px auto;

  > h4 {
    font-size: 24px;
    line-height: 44px;
    letter-spacing: 10px;
  }
`;
