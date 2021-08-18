import { Button } from "./components/Button/Button";
import { Name } from "./components/Name/Name";


const click = () => {
  return console.log("clicou no App")
}

function App() {
  const prof = "Andressa";
  return (
    <div className="App">
      <Button title="teste de botão" onClick={click} />
      <Name text={prof} />

    </div>
  );
}

export default App;
