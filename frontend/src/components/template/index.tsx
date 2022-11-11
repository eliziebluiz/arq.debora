import Footer from "../footer";
import LogoBlack from "../../assets/logo_black.svg";

import * as S from "./styles";

function Template({ children }: any) {
  return (
    <S.Container>
      <S.Card>
        <img src={LogoBlack} alt="LogoBlack" />
        {children}
      </S.Card>
      <Footer />
    </S.Container>
  );
}

export default Template;
