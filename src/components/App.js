import Button from "./Button"
import Input from "./Input"

const App = () => (
  <div>
    timescale
    <div>
      <Button label="Primary" primary />
      <Input
        type="text"
        label="Email address"
        placeholder="smith@smithandco.com"
        name="email"
        errorMessage="Invalid email"
        error={false}
      />
      <Input
        type="password"
        label="Create password"
        placeholder="6 caracteres or more"
        name="password"
        errorMessage="password too short"
        error={false}
      />
    </div>
  </div>
)

export default App
