import styled from "styled-components"

export function Carregando () {
    return(
        <Stl>
            Carregando...
        </Stl>
    )
}

const Stl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    font-weight: bold;
`;