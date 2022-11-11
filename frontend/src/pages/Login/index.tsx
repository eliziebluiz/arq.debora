import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function Login() {
  return (
    <Template>
      <Input placeholder="E-mail" />
      <Input placeholder="Password" style={{ marginTop: "28px" }} />
      <S.ForgotPassword>
        <a href="#">Esqueceu sua senha ?</a>
      </S.ForgotPassword>
      <S.Button>Entrar</S.Button>
    </Template>
  );
}

export default Login;
