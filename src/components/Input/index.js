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
  ...others
}) => {
  return (
    <WrappedInput {...others}>
      <StyledInputLabel for={name}>{label}</StyledInputLabel>
      <StyledInputText
        id={name}
        type={type}
        placeholder={placeholder}
        error={error}
      />
      {error && <ErrorText>{errorMessage}</ErrorText>}
    </WrappedInput>
  )
}

export default Input
