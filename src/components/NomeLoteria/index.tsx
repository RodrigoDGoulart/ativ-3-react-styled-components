import { useEffect, useState } from "react";
import styled from "styled-components";
import megasena from '../../assets/trevo-megasena.png';
import quina from '../../assets/trevo-quina.png';
import timemania from '../../assets/trevo-timemania.png';
import { useLocation } from "react-router-dom";

interface Props {
  logo?: string;
  titulo?: string;
}

export default function NomeLoteria(props: Props) {
  const loc = useLocation();

  const [logo, setLogo] = useState('')
  const [title, setTitle] = useState('')

  const TituloContainerStl = styled.span`
      display: flex;
      align-items: center;
      padding: 0;
      height: 48px;
      margin-bottom: 20px;
  `;

  const LogoStl = styled.img`
      margin-right: 12px
  `;

  const TituloStl = styled.h1`
        font-size: 36px;
        color: ${(props) => props.theme.loteria};
        display: inline;
    `;

  const defineContent = (url: string) => {
    switch(url) {
      case '/megasena':
        setLogo(megasena);
        setTitle('MEGASENA');
        break;
      case '/quina':
        setLogo(quina);
        setTitle('QUINA');
        break;
      case '/timemania':
        setLogo(timemania);
        setTitle('TIMEMANIA');
        break;
    }
  }

  useEffect(() => {
    defineContent(loc.pathname == '/' ? '/megasena' : loc.pathname);
  }, []);
  return (
    <TituloContainerStl>
      <LogoStl src={logo} />
      <TituloStl>{title}</TituloStl>
    </TituloContainerStl>
  );
}
