import PerfilPhoto from "../../assets/perfil.svg";

import * as S from "./styles";

function Perfil() {
  return (
    <S.Container id="home">
      <S.Info>
        <S.Title>Arquiteta Débora Caroline</S.Title>
        <S.Text>
          Ambientes responsivos, adaptáveis, convidativos e emocionantes
        </S.Text>
      </S.Info>
      <img src={PerfilPhoto} alt="Logo Débora Caroline" />
    </S.Container>
  );
}

export default Perfil;
