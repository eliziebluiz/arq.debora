import Listing from "../../components/listing";

import * as S from "./styles";

function ListProjects() {
  return (
    <Listing location="projects">
      <S.Title>
        <h4>Projetos</h4>
        <S.Button>Novo Projeto</S.Button>
      </S.Title>
      <S.Grid>
        {Array.from({ length: 10 }).map((_, index) => (
          <S.Item />
        ))}
      </S.Grid>
    </Listing>
  );
}

export default ListProjects;
