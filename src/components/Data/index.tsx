import styled from "styled-components";
import { LoteriaProps } from "../../types";

interface Props {
  jogo: LoteriaProps
}

export default function Data ({jogo}: Props) {
  return(
    <Stl>{`Concurso ${jogo.numeroDoConcurso} - ${jogo.dataPorExtenso}`}</Stl>
  );
}

const Stl = styled.span`
    color: ${props => props.theme.data};
`;