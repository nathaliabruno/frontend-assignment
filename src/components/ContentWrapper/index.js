import { StyledSection } from "./index.style"

const ContentWrapper = ({ children, ...others }) => {
  return <StyledSection {...others}>{children}</StyledSection>
}

export default ContentWrapper
