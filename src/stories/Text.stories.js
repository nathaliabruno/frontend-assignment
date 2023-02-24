import React from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyle } from "../styles"

import Text from "../components/Text"

export default {
  title: "Text",
  component: Text,
  decorators: [
    (storyFn) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    ),
  ],
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Text {...args} />

export const h1 = Template.bind({})
h1.args = {
  variant: "h1",
  children: "H1 Text example",
}

export const h2 = Template.bind({})
h2.args = {
  variant: "h2",
  children: "H2 Text example",
}
