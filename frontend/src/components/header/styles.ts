import styled from "styled-components";

interface List {
  active?: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #fff;
  min-height: 6.563rem;
  text-align: center;
  width: 100%;
  position: relative;

  > img {
    width: 3rem;
    height: 3rem;
    margin-left: 7.688rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 0;
  width: 100%;
  position: absolute;
  justify-content: center;

  display: flex;
  align-items: center;

  > li + li {
    margin-left: 7rem;
  }
`;

export const Item = styled.li`
  color: ${({ active }: List) => (active ? "#933A0E" : "#000")};
  font-size: 1.125rem;
`;
