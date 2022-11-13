import Logo from "/DC-logo.svg";

import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <img src={Logo} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item href="#home">Projetos</S.Item>
        <S.Item href="#projects">Contatos</S.Item>
        <S.Item href="#contacts">Agendamentos</S.Item>
      </S.List>
    </S.Header>
  );
}

export default Header;
