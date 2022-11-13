import Listing from "../Listing";

import * as S from "./styles";

function ListSchedule() {
  return (
    <Listing>
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

export default ListSchedule;
