import Garagem from "./componentes/Garagem";
import "./styles.css";

export default function App() {

  const nome1 = "Tiago"
  const nome2 = "Ludmila"

  function apresentaGaragem1() {
    alert(`Boas vindas a garagem de ${nome1}`)
  }
  function apresentaGaragem2() {
    alert(`Boas vindas a garagem de ${nome2}`)
  }
  return (
    <div className="App">
      <Garagem nome={nome1} mensagemApresentacao={apresentaGaragem1}/>
      <Garagem nome={nome2} mensagemApresentacao={apresentaGaragem2}/>
    </div>
  );
}
