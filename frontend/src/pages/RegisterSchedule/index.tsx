import Template from "../../components/template";
import Input from "../../components/input";

import * as S from "./styles";

function RegisterSchedule() {
  return (
    <Template>
      <Input placeholder="Tipo do Imóvel" />
      <Input placeholder="Situação do Imóvel" style={{ marginTop: "18px" }} />
      <div
        style={{
          display: "flex",
          width: "100%",
          textAlign: "left",
          justifyContent: "center",
          marginTop: "18px",
        }}
      >
        <div>
          <p>Tipo do Atendimento</p>

          <div>
            <input
              type="radio"
              name="atendimento"
              value="presencial"
              style={{ marginTop: "18px", marginRight: "10px" }}
            />
            <label htmlFor="presencial">Presencial</label>
          </div>
          <div>
            <input
              type="radio"
              name="atendimento"
              value="online"
              style={{ margin: "18px 10px 0px 0px" }}
            />
            <label htmlFor="online">Online</label>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p>Categoria do Imóvel</p>
          <div>
            <input
              type="radio"
              name="catergory"
              value="presencial"
              style={{ marginTop: "18px", marginRight: "10px" }}
            />
            <label htmlFor="presencial">Residencial</label>
          </div>
          <div>
            <input
              type="radio"
              name="catergory"
              value="online"
              style={{ margin: "18px 10px 0px 0px" }}
            />
            <label htmlFor="online">Comercial</label>
          </div>
        </div>
      </div>
      <Input
        placeholder="Localização do Imóvel"
        style={{ marginTop: "18px" }}
      />
      <Input placeholder="Tipo do projeto" style={{ marginTop: "18px" }} />
      <div style={{ textAlign: "left" }}>
        <p style={{ marginTop: "18px" }}>Porporção do lote ou ambiente:</p>

        <Input
          placeholder="Largura"
          style={{ marginTop: "18px", minWidth: "8rem", maxWidth: "8rem" }}
        />
        <Input
          placeholder="Largura"
          style={{
            margin: "1rem 0rem 0rem 1rem",
            minWidth: "8rem",
            maxWidth: "8rem",
          }}
        />
      </div>
      <S.Button>Cadastrar</S.Button>
    </Template>
  );
}

export default RegisterSchedule;
