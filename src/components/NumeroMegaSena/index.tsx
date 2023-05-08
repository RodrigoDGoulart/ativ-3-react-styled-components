import styled from "styled-components"
import { PropsNumero } from "../../types";

export function NumeroMegaSena ({numero, cor}: PropsNumero) {
    const cores = {
        'verde': '#209869',
        'azul-escuro': '#260085'
    }
    
    const SpanSld = styled.div`
        background-color: ${cores[cor ?? 'verde']};
        color: white;
        width: 48px;
        height: 48px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weigth: bold;
    `;
    
    return(
        <SpanSld>
            {numero}
        </SpanSld>
    );
}
