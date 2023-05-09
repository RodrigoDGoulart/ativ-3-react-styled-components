interface PropsNumero {
    numero: string;
    cor?: 'verde' | 'azul-escuro';
}

interface PropsListaNumeros {
    lista?: string[];
    cor?: 'verde' | 'azul-escuro'
}

interface PropsTitulo {
    children: string;
    cor: 'verde' | 'roxo' | 'azul' | 'azul-escuro';
    tamanho: 'grande' | 'medio';
}

interface PropsDescricao {
    children: string;
}

interface LoteriaContextProps {
    megasena: LoteriaProps;
    quina: LoteriaProps;
    timemania: LoteriaProps;
}

interface LoteriaProps {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso: number,
    valorPremio: number
}

interface TemaProps {
  acumulou: string;
  data: string;
  estimativa: string;
  loteria: string;
  bola: string;
  bolafonte: string;
}

interface TemaContext {
  setTema: React.Dispatch<React.SetStateAction<TemaProps>>
}

export type {
    PropsNumero,
    PropsListaNumeros,
    PropsTitulo,
    PropsDescricao,
    LoteriaContextProps,
    LoteriaProps,
    TemaProps,
    TemaContext
};