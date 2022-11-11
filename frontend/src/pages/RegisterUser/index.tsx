import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function Login() {
  return (
    <Template>
      <Input placeholder="Nome" />
      <Input placeholder="(99) 9 99999999" style={{ marginTop: "18px" }} />
      <Input placeholder="E-mail" style={{ marginTop: "18px" }} />
      <Input
        type="password"
        placeholder="Password"
        style={{ marginTop: "18px" }}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        style={{ marginTop: "18px" }}
      />
      <S.Button>Cadastrar</S.Button>
    </Template>
  );
}

export default Login;
