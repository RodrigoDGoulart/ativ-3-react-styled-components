import styled from "styled-components"
import { PropsNumero } from "../../types";

export function NumeroLotoFacil ({numero}: PropsNumero) {
    return(
        <Stl>
            {numero}
        </Stl>
    )
}

const Stl = styled.div`
    font-size: 36px;
    width: 36px;
    text-align: center;
    color: #930089;
`;