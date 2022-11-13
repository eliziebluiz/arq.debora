import React from "react";
import Header from "./components/header";
import Footer from "../../components/footer";

import * as S from "./styles";

interface ListingProps {
  children?: React.ReactNode;
}

function Listing({ children }: ListingProps) {
  return (
    <S.Container>
      <Header />
      <S.Card>{children}</S.Card>
      <Footer />
    </S.Container>
  );
}

export default Listing;
