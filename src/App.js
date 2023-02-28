import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded>Click Me!</Button>
      </div>
      <div>
        <Button danger outline >Buy Now!</Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary>Hide Adds!</Button>
      </div>
      <div>
        <Button primary rounded>Go Back!</Button>
      </div>
    </div>
  );
}

export default App;
