import Footer from "../footer";
import LogoBlack from "../../assets/logo_black.svg";

import * as S from "./styles";

function Template({ children }: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Card>
          <img src={LogoBlack} alt="LogoBlack" />
          {children}
        </S.Card>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
}

export default Template;
