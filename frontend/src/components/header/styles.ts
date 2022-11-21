import styled from "styled-components";

interface List {
  active?: boolean;
}

interface Button {
  isDisabled?: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #fff;
  min-height: 6.563rem;
  text-align: center;
  width: 100%;

  > img {
    width: 3rem;
    height: 3rem;
    margin-left: 7.688rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    grid-gap: 1rem;
    padding: 1rem 0rem;

    > img {
      margin-left: 0;
    }
    > button {
      margin-right: 0;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 0;
  width: 100%;
  justify-content: center;

  display: flex;
  align-items: center;

  > a + a {
    margin-left: 7rem;
  }

  @media (max-width: 768px) {
    > a + a {
      margin-left: 1rem;
    }
  }
`;

export const Item = styled.a`
  color: ${({ active }: List) => (active ? "#933A0E" : "#000")};
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Button = styled.button`
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ isDisabled }: Button) =>
    isDisabled ? "red" : "#933a0e"};
  color: #ffffff;
  cursor: pointer;

  padding: 0.5rem 2rem;
  border-radius: 1rem;
  margin-right: 7.688rem;
`;
