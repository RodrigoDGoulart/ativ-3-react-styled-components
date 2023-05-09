import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { TemaProps } from "../../types";
import { mega, quina, timemania } from "../../styles/theme";
import { useTema } from "../../hooks";

interface Links {
  label: string;
  url: string;
  cor: 'verde' | 'roxo' | 'azul-escuro';
  tema: TemaProps;
}

export default function Menu() {
  const nav = useNavigate();
  const loc = useLocation();

  const { setTema } = useTema();

  const [selecionado, setSelecionado] = useState('');

  const links: Links[] = [
    { label: 'Megasena', url: '/megasena', cor: 'verde', tema: mega },
    { label: 'Quina', url: '/quina', cor: 'azul-escuro', tema: quina },
    { label: 'Timemania', url: '/timemania', cor: 'azul-escuro', tema: timemania }
  ]
  
  useEffect(() => {
    setSelecionado(loc.pathname == '/' ? '/megasena' : loc.pathname);
    switch(loc.pathname) {
      case '/megasena':
        setTema(mega);
        break;
      case '/quina':
        setTema(quina);
        break;
      default:
        setTema(mega);
    }
  }, []);
  return (
    <List>
      {links.map((item: Links, index: number) => (
        <Item
          key={index}
          onClick={() => {
            setSelecionado(item.url);
            setTema(item.tema);
            nav(item.url);
          }}
          style={item.url == selecionado ?
            {
              color: '#aaa',
              cursor: 'default'
            } :
            { color: item.tema.loteria }
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