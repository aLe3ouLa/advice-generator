import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [advice, setAdvice] = useState({ id: 0, advice: '...' });

  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(result => result.json())
      .then(data => setAdvice(data.slip))
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Card advice={advice} fetchNewAdvice={fetchAdvice} />
    </div>
  );
}

export default App;
