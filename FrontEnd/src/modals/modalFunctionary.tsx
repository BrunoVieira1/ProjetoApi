import { Input } from "@mui/material";

function ModalFunctionary() {
  return (
    <>
      <h1>Cadastrar Funcionário</h1>
      <Input className="placeInput" placeholder="Nome" />
      <Input className="placeInput" placeholder="cpf" />
      <Input className="placeInput" placeholder="Cargo" />
      <Input className="placeInput" placeholder="Senha" />
    </>
  );
}
export default ModalFunctionary;
