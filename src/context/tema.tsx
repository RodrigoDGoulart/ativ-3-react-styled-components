import { createContext, useState } from "react";
import { TemaContext, TemaProps } from "../types";
import { ThemeProvider } from "styled-components";
import { mega } from "../styles/theme";

const Tema = createContext({} as TemaContext);

function TemaProvider ({children}: any) {
  const [theme, setTheme] = useState(mega);
  
  return(
    <Tema.Provider value={{setTema: setTheme}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Tema.Provider>
  );
}

export {
  Tema,
  TemaProvider
}