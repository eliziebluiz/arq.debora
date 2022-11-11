import PerfilPhoto from "../../assets/perfil_size.svg";

import * as S from "./styles";

function Info() {
  return (
    <S.Container>
      <img src={PerfilPhoto} alt="Logo Débora Caroline" />
      <S.Info>
        <S.Title>Acreditamos</S.Title>
        <S.Text>
          que cada projeto tem alma, e por isso merece ser tratado com vigor e
          entusiasmo. Meu trabalho é trazer brilho aos olhos das pessoas através
          do melhor que a arquitetura pode oferecer. Poucas coisas nos traduzem
          tanto como nosso jeito de morar.
        </S.Text>
      </S.Info>
    </S.Container>
  );
}

export default Info;
