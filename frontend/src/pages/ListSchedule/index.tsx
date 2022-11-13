import Listing from "../../components/listing";

import * as S from "./styles";

function ListSchedule() {
  return (
    <Listing location="schedule">
      <h4>Agendamentos</h4>
      <S.Grid>
        {Array.from({ length: 10 }).map((_, index) => (
          <S.Item />
        ))}
      </S.Grid>
    </Listing>
  );
}

export default ListSchedule;
