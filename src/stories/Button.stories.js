import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles"

import Button from "../components/Button/index"

export default {
  title: "Button",
  component: Button,
  decorators: [
    (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>,
  ],
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Primary Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Secondary Button",
  primary: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  label: "Disabled Button",
  disabled: true,
  primary: true,
}

export const PrimaryFull = Template.bind({})
PrimaryFull.args = {
  label: "Full Width Button",
  fullWidth: true,
  primary: true,
}
