import { createGlobalStyle } from "styled-components"

const theme = {
  color: {
    background: "#FFFFFF",
    primary: {
      main: "#FDB515",
      contrastText: "#141E35",
      hover: "#FEDA8A",
      pressed: "#FEECC4",
    },
    secondary: {
      main: "#1472EC",
      contrastText: "#FFFFFF",
      hover: "#8CBBF9",
      pressed: "#C5DDFC",
    },
    disabled: {
      background: "#EDEEF0",
      color: "#FFFFFF",
    },
    error: "#F54545",
    border: "#898E9A",
    navy: "#141E35",
  },
  font: {
    size: {
      caption: "0.75",
      label: "0.875rem",
      title: "2rem",
      subtitle: "1.5rem",
    },
    family: {
      sans: "Inter",
      mono: "JetBrains Mono",
    },
  },
}

export default theme

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`
