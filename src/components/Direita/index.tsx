import styled from "styled-components";
import { LoteriaProps } from "../../types"
import Acumulou from "../Acumulou";
import Data from "../Data";
import { Resultado } from "../Resultado";

interface Props {
  jogo: LoteriaProps;
}

export default function Direita({ jogo }: Props) {
  return (
    <RightStl>
      <Resultado lista={jogo.dezenas} />
      <Acumulou ganhadores={jogo.quantidadeGanhadores} />
      <Data jogo={jogo} />
    </RightStl>
  )
}

const RightStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 36%;
    gap: 18px;
`;