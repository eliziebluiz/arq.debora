import Logo from "/DC-logo.svg";

import * as S from "./styles";

interface HeaderProps {
  location?: string;
}

const LOCATION = {
  projects: "projects",
  contacts: "contacts",
  schedule: "schedule",
};

function Header({ location }: HeaderProps) {
  return (
    <S.Header>
      <img src={Logo} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item href="/list-projects" active={location === LOCATION.projects}>
          Projetos
        </S.Item>
        <S.Item href="/list-contact" active={location === LOCATION.contacts}>
          Contatos
        </S.Item>
        <S.Item href="/list-schedule" active={location === LOCATION.schedule}>
          Agendamentos
        </S.Item>
      </S.List>
    </S.Header>
  );
}

export default Header;
