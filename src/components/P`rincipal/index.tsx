import styled from "styled-components";
import Esquerda from "../Esquerda";
import Direita from "../Direita";
import { LoteriaProps } from "../../types";

interface Props {
  jogo: LoteriaProps;
}

export default function Principal({ jogo }: Props) {
  return (
    <>
      <ResultadoStl>
        <Esquerda jogo={jogo} />
        <Direita jogo={jogo} />
      </ResultadoStl>
      <DivisoriaStl />
    </>
  );
}

const ResultadoStl = styled.div`
    display: flex;
    padding: 24px;
    margin: 24px;
`;

const DivisoriaStl = styled.div`
    margin: 24px;
    border: 1px solid #ddd;
`;