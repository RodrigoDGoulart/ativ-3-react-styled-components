import styled from "styled-components";
import TrevoMegaSena from '../../assets/trevo-megasena.png';
import { Titulo } from "../../components/Titulo";
import numeral from "numeral";
import { Descricao } from "../../components/Descricao";
import { Divisoria } from "../../components/Divisoria";
import { Resultado } from "../../components/Resultado";
import { useContexto } from "../../hooks";
import { LoteriaProps } from "../../types";
import { Carregando } from "../../components/Carregando";
import NomeLoteria from "../../components/NomeLoteria";
import Estimativa from "../../components/Estimativa";
import Acumulou from "../../components/Acumulou";
import Data from "../../components/Data";
import Esquerda from "../../components/Esquerda";

export default function Megasena() {
  const { megasena } = useContexto();

  return (
    <>
      {
        megasena.dataApuracao ? <>
          <ResultadoStl>
            {/* megasena */}
            <Esquerda jogo={megasena} />
            <RightStl>
              <Resultado lista={megasena.dezenas} />
              <GanhadoresStl>
                <Acumulou ganhadores={megasena.quantidadeGanhadores}  />
              </GanhadoresStl>
              <GanhadoresStl>
                <Data jogo={megasena} />
              </GanhadoresStl>
            </RightStl>
          </ResultadoStl>
          <DivisoriaStl><Divisoria /></DivisoriaStl>
        </> :
          <Carregando />
      }
    </>
  )
}

const ResultadoStl = styled.div`
    display: flex;
    padding: 24px;
    margin: 24px;
`;

const DivisoriaStl = styled.div`
    margin: 24px;
`;

const LeftStl = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 365px;
    margin-right: 64px;
`;

const LeftContentStl = styled.div`
    margin-left: 48px;
    display: flex;
    flex-direction: column;
`;

const ValorStl = styled.span`
    margin-top: 12px;
`;

const RightStl = styled.div`
    display: flex;
    flex-direction: column;
    width: 36%
`;

const GanhadoresStl = styled.span`
    margin-top: 16px;
`;