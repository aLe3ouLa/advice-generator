import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card advice={{ id: "1", advice: "hello" }} />
    </div>
  );
}

export default App;
