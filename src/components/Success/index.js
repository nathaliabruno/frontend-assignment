import Text from "../Text"
import { ReactComponent as Check } from "../../images/check.svg"
import { ReactComponent as EonCar } from "../../images/eon-car.svg"

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
      <EonCar />
    </SuccessWrapper>
  )
}

export default Success
