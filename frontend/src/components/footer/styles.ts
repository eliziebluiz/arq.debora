import styled from "styled-components";

interface List {
  active?: boolean;
}

export const Footer = styled.nav`
  display: flex;
  align-items: center;
  background-color: #000;
  min-height: 11rem;
  text-align: center;
  width: 100%;

  > img {
    width: 7rem;
    height: 4rem;
    margin-left: 7.688rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    grid-gap: 1rem;
    padding: 1rem 0rem;

    > img {
      margin-left: 0;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 0;
  width: 100%;
  justify-content: space-evenly;

  display: flex;
  align-items: center;

  > li + li {
    margin-left: 7rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    > li + li {
      margin-left: 0rem;
      margin-top: 1rem;
    }
  }
`;

export const Item = styled.li`
  color: #ffffff;
  font-size: 1.125rem;
  text-align: left;

  > p {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  > a {
    color: #ffffff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  > a + a {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
