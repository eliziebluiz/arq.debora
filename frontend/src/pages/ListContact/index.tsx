import Listing from "../../components/listing";

import * as S from "./styles";

function ListContact() {
  return (
    <Listing location="contacts">
      <S.Title>
        <h4>Contatos</h4>
        <S.Button>Novo Contato</S.Button>
      </S.Title>
      <S.Grid>
        {Array.from({ length: 10 }).map((_, index) => (
          <S.Item />
        ))}
      </S.Grid>
    </Listing>
  );
}

export default ListContact;
