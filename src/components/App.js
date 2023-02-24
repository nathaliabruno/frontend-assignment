import Form from "./Form"
import Text from "./Text"
import TopBar from "./TopBar"
import ContentWrapper from "./ContentWrapper"
import styled from "styled-components"

import { useState } from "react"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  padding: 5rem;
  box-sizing: border-box;
  position: relative;

`
const App = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSuccess = (value) => {
    setSubmitted(value)
  }
  return (
    <Main>
      <TopBar />
      <ContentWrapper>
        <Text variant="h1" align="center" style={{ padding: "0 4rem" }}>
          Let’s sign you up for Timescale Cloud
        </Text>
        <Form success={(e) => handleSuccess(e)} />
      </ContentWrapper>
    </Main>
  )
}

export default App
