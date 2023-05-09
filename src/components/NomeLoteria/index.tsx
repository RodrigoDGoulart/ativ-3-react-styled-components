import styled from "styled-components";
import { Titulo } from "../Titulo";

interface Props {
  logo: string;
  titulo: string;
}

export default function NomeLoteria(props: Props) {
  
  const TituloStl = styled.span`
      display: flex;
      align-items: center;
      padding: 0;
      height: 48px;
      margin-bottom: 20px;
  `;
  
  const LogoStl = styled.img`
      margin-right: 12px
  `;

  return (
    <TituloStl>
      <LogoStl src={props.logo} />
      <Titulo cor="verde" tamanho="grande">{props.titulo}</Titulo>
    </TituloStl>
  );
}
