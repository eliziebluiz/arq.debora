import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function RegisterSchedule() {
  return (
    <Template>
      <Input placeholder="Tipo do Imóvel" />
      <Input placeholder="Situação do Imóvel" style={{ marginTop: "18px" }} />
      <fieldset>
        <div>
          <input
            type="radio"
            name="presencial"
            value="presencial"
            style={{ marginTop: "18px" }}
          />
          <label htmlFor="presencial">Presencial</label>
        </div>
        <div>
          <input
            type="radio"
            name="online"
            value="online"
            style={{ marginTop: "18px" }}
          />
          <label htmlFor="online">Online</label>
        </div>
      </fieldset>

      <Input
        placeholder="Localização do Imóvel"
        style={{ marginTop: "18px" }}
      />
      <Input placeholder="Tipo do projeto" style={{ marginTop: "18px" }} />

      <Input
        type="password"
        placeholder="Confirm Password"
        style={{ marginTop: "18px" }}
      />
      <S.Button>Cadastrar</S.Button>
    </Template>
  );
}

export default RegisterSchedule;
