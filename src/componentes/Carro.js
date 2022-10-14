function Carro(props) {
  return (
    <div>
      <h2>{props.Nome}</h2>
      <ul>
        <li>Cor: {props.Cor}</li>
        <li>Ano: {props.Ano}</li>
        <li>Flex: {props.Flex}</li>
        <li>Adicionado por: {props.AdicionadoPor}</li>
      </ul>
    </div>
  );
}

export default Carro;