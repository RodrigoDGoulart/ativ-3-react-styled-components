import numeral from "numeral";
import { LoteriaProps } from "../../types";
import styled from "styled-components";

interface Props {
  jogo: LoteriaProps
}

export default function Estimativa({jogo}: Props) {
  return (
    <LeftContentStl>
      <DescricaoStl>
        {`Estimativa de prêmio do próximo concurso. Sorteio em: ${jogo.dataProximoConcurso}`}
      </DescricaoStl>
      <ValorStl>
        <TituloStl>
          {`R$${numeral(jogo.valorEstimadoProximoConcurso).format('0,0.00')}`}
        </TituloStl>
      </ValorStl>
    </LeftContentStl>
  );
}

const LeftContentStl = styled.div`
    margin-left: 48px;
    display: flex;
    flex-direction: column;
`;

const TituloStl = styled.h1`
        font-size: 24px;
        color: ${(props) => props.theme.loteria};
        display: inline;
    `;

const ValorStl = styled.span`
    margin-top: 12px;
`;

const DescricaoStl = styled.span`
    color: ${(props) => props.theme.data};
`;