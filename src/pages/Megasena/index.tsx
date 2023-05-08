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
                            <TituloStl>
                                <LogoStl src={TrevoMegaSena} alt='Mega-sena' />
                                <Titulo cor="verde" tamanho="grande">MEGA-SENA</Titulo>
                            </TituloStl>
                            <LeftContentStl>
                                <Descricao>
                                    {`Estimativa de prêmio do próximo concurso. Sorteio em: ${megasena.dataProximoConcurso}`}
                                </Descricao>
                                <ValorStl>
                                    <Titulo cor="verde" tamanho="medio">
                                        {`R$${numeral(megasena.valorEstimadoProximoConcurso).format('0,0.00')}`}
                                    </Titulo>
                                </ValorStl>
                            </LeftContentStl>
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

const TituloStl = styled.span`
    display: flex;
    align-items: center;
    padding: 0;
    height: 48px;
    margin-bottom: 20px;
`;

const LeftContentStl = styled.div`
    margin-left: 48px;
    display: flex;
    flex-direction: column;
`;

const LogoStl = styled.img`
    margin-right: 12px
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