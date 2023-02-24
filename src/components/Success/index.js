import Text from "../Text"
import { ReactComponent as Check } from "../../images/check.svg"
import { ReactComponent as LeonCar } from "../../images/leon-car.svg"

import { SuccessWrapper } from "./index.style"

const Success = () => {
  return (
    <SuccessWrapper>
      <Check />
      <Text
        variant="h1"
        align="center"
        style={{ padding: "0 1rem", margin: "3rem 0 0" }}
      >
        Thank you!
      </Text>
      <Text
        variant="h2"
        align="center"
        style={{ fontWeight: "400", marginBottom: "3rem" }}
      >
        Please check your email.
      </Text>
      <LeonCar />
    </SuccessWrapper>
  )
}

export default Success
