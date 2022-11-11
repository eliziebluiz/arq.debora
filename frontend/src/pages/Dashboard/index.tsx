import Header from "../../components/header";
import Perfil from "../../components/perfil";
import Info from "../../components/info";
import Footer from "../../components/footer";

import bg from "../../assets/background_all.svg";

import * as S from "./styles";

function Dashboard() {
  return (
    <S.Container>
      <Header />
      <Perfil />
      <img className="background-all" src={bg} />
      <Info />
      <Footer />
    </S.Container>
  );
}

export default Dashboard;
