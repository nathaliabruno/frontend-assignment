import styled from "styled-components"

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  padding-left: 2rem;
`
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`

const StyledInputLabel = styled.label`
  font-size: ${(props) => props.theme.font.size.caption};
  color: ${(props) => props.theme.color.navy};
  font-weight: regular;
  line-height: 1.25rem;
  letter-spacing: -1;

  &:hover {
    cursor: pointer;
  }
`

const FakeInputCheckBox = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.1rem;
  height: 1.1rem;

  border: ${(props) => (props.error ? `2px solid` : `1px solid`)};
  border-color: ${(props) =>
    props.error ? props.theme.color.error : props.theme.color.border};
  border-radius: 2px;
  background-color: ${(props) =>
    props.checked ? props.theme.color.secondary.main : "white"};

  &:after {
    content: "";
    position: absolute;
    left: 4px;
    bottom: 3px;
    width: 5px;
    height: 11px;
    color: white;
    display: block;
    display: inline-block;
    transform: rotate(45deg);
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    display: ${(props) => (props.checked ? "flex" : "none")};
  }

  &:hover {
    cursor: pointer;
  }
`


export { HiddenCheckbox, StyledInputLabel, CheckboxWrapper, FakeInputCheckBox }
