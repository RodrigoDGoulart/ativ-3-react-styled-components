import styled from "styled-components";
import { LoteriaProps } from "../../types";
import Estimativa from "../Estimativa";
import NomeLoteria from "../NomeLoteria";

interface Props {
  jogo: LoteriaProps
}

export default function Esquerda({ jogo }: Props) {
  return (
    <LeftStl>
      <NomeLoteria />
      <Estimativa jogo={jogo} />
    </LeftStl>
  );
}

const LeftStl = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 365px;
    margin-right: 64px;
`;