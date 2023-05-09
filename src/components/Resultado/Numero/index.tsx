import styled from "styled-components"
import { PropsNumero } from "../../../types";

export function Numero({ numero }: PropsNumero) {
  const SpanSld = styled.div`
        background-color: ${props => props.theme.bola};
        color: ${props => props.theme.bolafonte};
        width: 48px;
        height: 48px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weigth: bold;
    `;

  return (
    <SpanSld>
      {numero}
    </SpanSld>
  );
}
