import { useState } from "react";

import { Input } from "@mui/material";
import { Api } from "../services/api/axios-config";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface Product {
  name: string;
  brand: string;
  description: string;
  quantity: string;
}

function ModalProduct() {
  const [product, setProduct] = useState<Product>({
    name: "",
    brand: "",
    description: "",
    quantity: "",
  });

  const insertProduct = () => {
    try {
      Api.post("/produtos", {
        nome: product.name,
        marca: product.brand,
        descricao: product.description,
        qtde: product.quantity,
      });
      alert("cadastrado");
    } catch (e) {
      console.error("erro", e);
    }
  };

  return (
    <>
      <h2>Cadastrar Produto</h2>
      <Input
        className="placeInput"
        placeholder="Nome"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="Marca"
        value={product.brand}
        onChange={(e) => setProduct({ ...product, brand: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="Descrição"
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <Input
        className="placeInput"
        placeholder="Quantidade"
        value={product.quantity}
        type="number"
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
      />
      <br></br>
      <button className="add-btn" onClick={insertProduct}>
        <AddBoxIcon style={{ color: "white" }} />
      </button>
    </>
  );
}
export default ModalProduct;
