import { useState } from "react";

import Logo from "/DC-logo.svg";

import * as S from "./styles";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <S.Header>
      <img src={Logo} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item active>Início</S.Item>
        <S.Item>Projetos</S.Item>
        <S.Item>Contatos</S.Item>
      </S.List>
    </S.Header>
  );
}

export default Header;
