import styled from "styled-components";
import { NumeroMegaSena } from "../NumeroMegaSena";
import { PropsListaNumeros } from "../../types";
import { NumeroLotoFacil } from "../NumeroLotoFacil";
import { Divisoria } from "../Divisoria";

export function ListaNumerosLotoFacil ({lista}: PropsListaNumeros) {
    return(
        <>
        {lista && (<ContainerStl>
                <ListaStl>
                    {lista.slice(0,5).map((n, index) => (
                        <ItemStl key={index}>
                            <NumeroLotoFacil numero={n} />
                        </ItemStl>
                    ))}
                </ListaStl>
                <Divisoria />
                <ListaStl>
                    {lista.slice(5,10).map((n, index) => (
                        <ItemStl key={index}>
                            <NumeroLotoFacil numero={n} />
                        </ItemStl>
                    ))}
                </ListaStl>
                <Divisoria />
                <ListaStl>
                    {lista.slice(10,15).map((n, index) => (
                        <ItemStl key={index}>
                            <NumeroLotoFacil numero={n} />
                        </ItemStl>
                    ))}
                </ListaStl>
            </ContainerStl>)}
        </>
    );
}

const ContainerStl = styled.div`
    width: 100%;
`;

const ListaStl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 8px 24px;
    display: flex;
    justify-content: space-between;
`;

const ItemStl = styled.li`
    width: fit-content;
    padding-left: 6px;
    padding-right: 6px;
`;