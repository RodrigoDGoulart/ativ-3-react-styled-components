import styled from "styled-components"
import { PropsDescricao } from "../../types";

export function Descricao ({children}: PropsDescricao) {
    return (
        <Stl>
            {children}
        </Stl>
    )
}

const Stl = styled.span`
    color: #4c556c;
`;