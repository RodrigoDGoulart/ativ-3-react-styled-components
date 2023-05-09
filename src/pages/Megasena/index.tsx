import styled from "styled-components";
import TrevoMegaSena from '../../assets/trevo-megasena.png';
import { Titulo } from "../../components/Titulo";
import numeral from "numeral";
import { Descricao } from "../../components/Descricao";
import { Divisoria } from "../../components/Divisoria";
import { ListaNumeros } from "../../components/ListaNumerosMegaSena";
import { useContexto } from "../../hooks";
import { LoteriaProps } from "../../types";
import { Carregando } from "../../components/Carregando";
import NomeLoteria from "../../components/NomeLoteria";
import Estimativa from "../../components/Estimativa";

export default function Megasena() {
  const { megasena } = useContexto();

  const acumulou = (sena: LoteriaProps) => {
    if (sena.acumulado) {
      return 'ACUMULOU!';
    }
    return `${sena.quantidadeGanhadores} ${sena.quantidadeGanhadores > 1 ? 'GANHADORES' : 'GANHADOR'}`
  }

  return (
    <>
      {
        megasena.dataApuracao ? <>
          <ResultadoStl>
            {/* megasena */}
            <LeftStl>
              <NomeLoteria />
              <Estimativa jogo={megasena} />
            </LeftStl>
            <RightStl>
              <ListaNumeros cor="verde" lista={megasena.dezenas} />
              <GanhadoresStl>
                <Titulo cor="azul" tamanho="grande">
                  {acumulou(megasena)}
                </Titulo>
              </GanhadoresStl>
              <GanhadoresStl>
                <Descricao>{`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}</Descricao>
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