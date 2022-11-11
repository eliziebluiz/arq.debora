import LogoWhite from "../../assets/logo_white.svg";
import Face from "../../assets/facebook-f.svg";
import Insta from "../../assets/instagram.svg";
import Pinterest from "../../assets/pinterest-p.svg";

import * as S from "./styles";

function Header() {
  return (
    <S.Footer>
      <img src={LogoWhite} alt="Logo Débora Caroline" />
      <S.List>
        <S.Item>
          <p>Email</p>
          <a href="mailto:arqdeboracaroline@gmail.com">
            arqdeboracaroline@gmail.com
          </a>
        </S.Item>
        <S.Item>
          <p>Conectar</p>
          <a
            href="https://www.instagram.com/arqdeboracaroline/"
            target="_blank"
          >
            <img src={Face} />
          </a>
          <a
            href="https://www.instagram.com/arqdeboracaroline/"
            target="_blank"
          >
            <img src={Insta} />
          </a>
          <a
            href="https://www.instagram.com/arqdeboracaroline/"
            target="_blank"
          >
            <img src={Pinterest} />
          </a>
        </S.Item>
      </S.List>
    </S.Footer>
  );
}

export default Header;
