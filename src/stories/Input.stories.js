import React from "react"
import { ThemeProvider } from "styled-components"
import theme, { GlobalStyle } from "../styles"

import Input from "../components/Input"

export default {
  title: "Input",
  component: Input,
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
const Template = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
  type: "text",
  label: "Input Text",
}

export const TextWithERror = Template.bind({})
TextWithERror.args = {
  label: "Input with error",
  error: true,
  errorMessage: "error message helper text",
}

export const Password = Template.bind({})
Password.args = {
  type: "password",
  label: "Input Password",
}
