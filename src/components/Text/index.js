import styled from "styled-components"

const Text = ({ variant, children, align, ...others }) => {
  const StyledText = styled(variant)`
    text-align: ${(props) => (props.align ? props.align : "center")};
  `
  return <StyledText {...others}>{children}</StyledText>
}

export default Text
