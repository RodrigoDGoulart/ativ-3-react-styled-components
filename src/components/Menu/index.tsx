import { Link } from "react-router-dom";
import styled from "styled-components";
import {useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";

interface Links {
    label: string;
    url: string;
    cor: 'verde' | 'roxo' | 'azul-escuro';
}

export default function Menu () {
    const nav = useNavigate();
    const loc = useLocation();

    const [selecionado, setSelecionado] = useState('');

    const links: Links[] = [
        {label: 'Lotofácil', url:'/lotofacil', cor: 'roxo'},
        {label: 'Megasena', url:'/megasena', cor: 'verde'},
        {label: 'Quina', url:'/quina', cor:'azul-escuro'}
    ]

    const cores = {
        'verde': '#209869',
        'roxo':  '#930089',
        'azul-escuro': '#260085'
    }

    useEffect(() => {
        setSelecionado(loc.pathname == '/' ? '/lotofacil' : loc.pathname);
    }, []);
    return(
        <List>
          {links.map((item: Links, index: number) => (
            <Item
            key={index}
            onClick={() => {
                setSelecionado(item.url);
                nav(item.url);
            }}
            style={item.url == selecionado ?
            {color: '#aaa',
            cursor: 'default'} :
            {color: cores[item.cor]}
            }> 
                {item.label}
            </Item>
          ))}
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 12px;
    margin-left: 4px;
    display: flex;
`;

const Item = styled.li`
    font-size: 24px;
    margin: 0px 8px;
    font-weight: bold;
    cursor: pointer
`;