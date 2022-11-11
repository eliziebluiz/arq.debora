import styled from "styled-components";

interface List {
  active?: boolean;
}

export const Footer = styled.header`
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
`;
