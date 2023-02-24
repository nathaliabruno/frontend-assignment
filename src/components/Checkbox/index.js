import React, { useState } from "react"
import {
  HiddenCheckbox,
  StyledInputLabel,
  CheckboxWrapper,
  FakeInputCheckBox,
} from "./index.style"

import { WrappedInput, ErrorText } from "../Input/index.style"

const Checkbox = ({
  label,
  name,
  error,
  errorMessage,
  changeHandle,
  ...others
}) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }
  return (
    <WrappedInput {...others}>
      <CheckboxWrapper>
        <FakeInputCheckBox htmlFor={name} checked={checked} error={error} />
        <HiddenCheckbox
          id={name}
          error={error}
          checked={checked}
          onChange={handleCheckboxChange}
        />

        <StyledInputLabel checked={checked} htmlFor={name}>
          {label}
        </StyledInputLabel>
      </CheckboxWrapper>
      {error && <ErrorText htmlFor={name}>{errorMessage}</ErrorText>}
    </WrappedInput>
  )
}

export default Checkbox
