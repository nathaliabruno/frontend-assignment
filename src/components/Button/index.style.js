import styled from "styled-components"

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary
      ? props.theme.color.primary.main
      : props.theme.color.secondary.main};
  color: ${(props) =>
    props.primary
      ? props.theme.color.primary.contrastText
      : props.theme.color.secondary.contrastText};
  border: none;
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -1%;
  font-weight: bold;
  padding: 0.5rem 5rem;
  transition: background 0.3s ease;
  willchange: background;

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.color.primary.hover
        : props.theme.color.secondary.hover};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) =>
      props.primary
        ? props.theme.color.primary.pressed
        : props.theme.color.secondary.pressed};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.disabled.background};
    color: ${(props) => props.theme.color.disabled.color};
    cursor: not-allowed;
  }
`

export { StyledButton }
