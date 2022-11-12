import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function ForgotPassword({ variant = "code" }) {
  return (
    <Template>
      {variant === "code" ? (
        <Input placeholder="Code" />
      ) : (
        <Input placeholder="E-mail" />
      )}
      <S.Button>Enviar</S.Button>
    </Template>
  );
}

export default ForgotPassword;
