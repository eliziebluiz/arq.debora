import Logo from "/DC-logo.svg";

import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <img src={Logo} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item href="#home">Início</S.Item>
        <S.Item href="#projects">Projetos</S.Item>
        <S.Item href="#contacts">Contatos</S.Item>
      </S.List>
    </S.Header>
  );
}

export default Header;
