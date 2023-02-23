import { StyledButton } from "./index.style"

const Button = ({ label, action, ...others }) => {
  return (
    <StyledButton onClick={action} {...others}>
      {label}
    </StyledButton>
  )
}

export default Button
