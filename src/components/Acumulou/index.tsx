import styled from "styled-components";

interface Props {
  ganhadores: number
}

export default function Acumulou({ ganhadores }: Props) {

  const Stl = styled.h1`
        font-size: 36px;
        color: ${props => props.theme.acumulou};
        display: inline;
    `;

  return (
    <Stl>
      {ganhadores > 0 ?
        ganhadores > 1 ?
          `${ganhadores} GANHADORES` :
          `${ganhadores} GANHADORE` :
        `ACUMULOU`}
    </Stl>
  );
}