import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme, { GlobalStyle } from "./styles"

import { ThemeProvider } from "styled-components"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)