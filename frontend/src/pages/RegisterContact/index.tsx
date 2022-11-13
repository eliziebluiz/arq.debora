import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function Login() {
  return (
    <Template>
      <Input placeholder="Titulo do contato" />
      <Input placeholder="Descrição do contato" style={{ marginTop: "28px" }} />
      <S.Button>Cadastrar</S.Button>
    </Template>
  );
}

export default Login;
