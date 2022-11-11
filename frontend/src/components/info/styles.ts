import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 2rem 0rem;
  justify-content: center;

  > img {
    width: 16.875rem;
    height: 22.5rem;
    margin-left: 7.688rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 3rem;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #535353;
  max-width: 400px;
  text-align: justify;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  letter-spacing: 0.5rem;
`;
