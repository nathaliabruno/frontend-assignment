import {
  StyledInputText,
  StyledInputLabel,
  WrappedInput,
  ErrorText,
} from "./index.style"

const Input = ({
  label,
  name,
  type,
  placeholder,
  error,
  errorMessage,
  changeHandle,
  ...others
}) => {
  return (
    <WrappedInput {...others}>
      <StyledInputLabel htmlFor={name}>{label}</StyledInputLabel>
      <StyledInputText
        id={name}
        type={type}
        placeholder={placeholder}
        error={error}
        onBlur={changeHandle}
      />
      {error && <ErrorText htmlFor={name}>{errorMessage}</ErrorText>}
    </WrappedInput>
  )
}

export default Input
