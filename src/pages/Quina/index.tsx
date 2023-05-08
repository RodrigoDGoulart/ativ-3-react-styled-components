import styled from "styled-components";
import TrevoQuina from '../../assets/trevo-quina.png';
import { Titulo } from "../../components/Titulo";
import numeral from "numeral";
import { Descricao } from "../../components/Descricao";
import { Divisoria } from "../../components/Divisoria";
import { ListaNumeros } from "../../components/ListaNumerosMegaSena";
import { useContexto } from "../../hooks";
import { LoteriaProps } from "../../types";
import { Carregando } from "../../components/Carregando";

export default function Quina() {
    const { quina } = useContexto();

    const acumulou = (sena: LoteriaProps) => {
        if (sena.acumulado) {
            return 'ACUMULOU!';
        }
        return `${sena.quantidadeGanhadores} ${sena.quantidadeGanhadores > 1 ? 'GANHADORES' : 'GANHADOR'}`
    }

    return (
        <>
            {
                quina.dataApuracao ? <>
                    <ResultadoStl>
                        {/* megasena */}
                        <LeftStl>
                            <TituloStl>
                                <LogoStl src={TrevoQuina} alt='Mega-sena' />
                                <Titulo cor="azul-escuro" tamanho="grande">Quina</Titulo>
                            </TituloStl>
                            <LeftContentStl>
                                <Descricao>
                                    {`Estimativa de prêmio do próximo concurso. Sorteio em: ${quina.dataProximoConcurso}`}
                                </Descricao>
                                <ValorStl>
                                    <Titulo cor="azul-escuro" tamanho="medio">
                                        {`R$${numeral(quina.valorEstimadoProximoConcurso).format('0,0.00')}`}
                                    </Titulo>
                                </ValorStl>
                            </LeftContentStl>
                        </LeftStl>
                        <RightStl>
                            <ListaNumeros cor="azul-escuro" lista={quina.dezenas} />
                            <GanhadoresStl>
                                <Titulo cor="azul" tamanho="grande">
                                    {acumulou(quina)}
                                </Titulo>
                            </GanhadoresStl>
                            <GanhadoresStl>
                                <Descricao>{`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}</Descricao>
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