import styled from "styled-components";
import { Numero } from "./Numero";
import { PropsListaNumeros } from "../../types";

export function Resultado({ lista, cor }: PropsListaNumeros) {
  return (
    <>
      {lista && (<ListaStl>
        {lista.map((n, index) => (
          <ItemStl key={index}>
            <Numero numero={n} />
          </ItemStl>
        ))}
      </ListaStl>)}
    </>
  );
}

const ListaStl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    width: fit-content;
`;

const ItemStl = styled.li`
    width: fit-content;
    padding-left: 6px;
    padding-right: 6px;
`;