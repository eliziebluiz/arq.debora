import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function ForgotPassword() {
  return (
    <Template>
      <Input placeholder="E-mail" />
      <S.Button>Enviar</S.Button>
    </Template>
  );
}

export default ForgotPassword;
