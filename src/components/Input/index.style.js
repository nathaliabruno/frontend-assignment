import styled from "styled-components"

const WrappedInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;
`

const StyledInputText = styled.input`
  border: ${(props) => (props.error ? `2px solid` : `1px solid`)};
  border-color: ${(props) =>
    props.error ? props.theme.color.error : props.theme.color.border};
  background-color: ${(props) => props.theme.color.background};
  border-radius: 2px;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.color.navy};
  font-size: ${(props) => props.theme.font.size.caption};
  display: block;
  transition: border 0.3s ease;
  will-change: border;

  &:focus {
    outline: none;
    border: 2px solid #1472ec;
  }
`

const StyledInputLabel = styled.label`
  font-size: ${(props) => props.theme.font.size.label};
  color: ${(props) => props.theme.color.navy};
  font-weight: bold;
  line-height: 1.5rem;
  letter-spacing: -1%;
  display: block;
`

const ErrorText = styled.label`
  font-size: ${(props) => props.theme.font.size.caption};
  color: ${(props) => props.theme.color.error};
  font-family: ${(props) => props.theme.font.family.mono};
  display: block;
  margin-top: 0.5rem;
  line-height: 1.25rem;
  letterspacing: -1%;
`

export { StyledInputText, StyledInputLabel, WrappedInput, ErrorText }
