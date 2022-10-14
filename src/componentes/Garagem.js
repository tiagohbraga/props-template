import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>

      <Carro
        Nome={"Civic"}
        Cor={"Prata"}
        Ano={2022}
        Flex={"true"}
        AdicionadoPor={props.nome}
      />
      <Carro
        Nome={"Fusca"}
        Cor={"Vermelho"}
        Ano={1962}
        Flex={"false"}
        AdicionadoPor={props.nome}
      />
      <Carro
        Nome={"Brasilia"}
        Cor={"Amarela"}
        Ano={1980}
        Flex={"false"}
        AdicionadoPor={props.nome}
      />
      <Carro
        Nome={"Vectra"}
        Cor={"Branco"}
        Ano={1998}
        Flex={"false"}
        AdicionadoPor={props.nome}
      />
    </div>
  );
}
export default Garagem;
