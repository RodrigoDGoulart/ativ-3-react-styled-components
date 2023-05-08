import styled from "styled-components";
import { PropsTitulo } from "../../types";

export function Titulo (props: PropsTitulo) {

    const cores = {
        'verde': '#209869',
        'roxo':  '#930089',
        'azul': '#0066b3',
        'azul-escuro': '#260085'
    }
    
    const tamanho = {
        'grande': '36px',
        'medio': '24px'
    }
    
    const Stl = styled.h1`
        font-size: ${tamanho[props.tamanho]};
        color: ${cores[props.cor]};
        display: inline;
    `;

    return(
        <Stl>
            {props.children.toUpperCase()}
        </Stl>
    );
}

