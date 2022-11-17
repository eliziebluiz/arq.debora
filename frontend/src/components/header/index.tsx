import { useNavigate } from "react-router-dom";

import Logo from "/DC-logo.svg";

import * as S from "./styles";

function Header() {
  const history = useNavigate();
  const token = localStorage.getItem("token");

  const handleLoginAndLogout = () => {
    if (!!token) {
      localStorage.removeItem("token");
    }
    return history(!!token ? "/" : "/login");
  };

  return (
    <S.Header>
      <img src={Logo} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item href="#home">Início</S.Item>
        <S.Item href="#projects">Projetos</S.Item>
        <S.Item href="#contacts">Contatos</S.Item>
      </S.List>
      <S.Button isDisabled={!!token} onClick={() => handleLoginAndLogout()}>
        {!!token ? "Sair" : "Login"}
      </S.Button>
    </S.Header>
  );
}

export default Header;
