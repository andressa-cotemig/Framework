//import './App.css';

const click = (nome, descricao) => {
  return alert(`${nome} é ${descricao}`)
}

const lista = [
  { nome: "Arroz", descricao: "branco" },
  { nome: "Feijão", descricao: "marrom" },
  { nome: "Carne", descricao: "vermelha" },
  { nome: "Salada", descricao: "verde" }]

function App() {
  return (
    <div className="App">
      <ul>
        {
          lista.map((item, index) =>
            <li key={index} onClick={() => click(item.nome, item.descricao)}><button>{item.nome}</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
