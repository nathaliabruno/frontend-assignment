import React, { useState } from "react"
import {
  HiddenCheckbox,
  StyledInputLabel,
  CheckboxWrapper,
  FakeInputCheckBox,
} from "./index.style"

import { WrappedInput, ErrorText } from "../Input/index.style"

const Checkbox = ({ label, name, error, errorMessage, ...others }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }
  return (
    <WrappedInput {...others}>
      <CheckboxWrapper>
        <FakeInputCheckBox for={name} checked={checked} />
        <HiddenCheckbox
          id={name}
          error={error}
          checked={checked}
          onChange={handleCheckboxChange}
        />

        <StyledInputLabel checked={checked} for={name}>
          {label}
        </StyledInputLabel>
      </CheckboxWrapper>
      {error && <ErrorText>{errorMessage}</ErrorText>}
    </WrappedInput>
  )
}

export default Checkbox
