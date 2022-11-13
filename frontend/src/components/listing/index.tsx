import React from "react";
import Header from "./components/header";
import Footer from "../../components/footer";

import * as S from "./styles";

interface ListingProps {
  location?: string;
  children?: React.ReactNode;
}

function Listing({ location, children }: ListingProps) {
  return (
    <S.Container>
      <Header location={location} />
      <S.Card>{children}</S.Card>
      <Footer />
    </S.Container>
  );
}

export default Listing;
