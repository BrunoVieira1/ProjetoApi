import { Api } from "../axios-config";

export const auth = async (cpf: string, senha: string) => {
  try {
    const data = await Api.post("/auth", {
      data: {
        cpf: cpf,
        senha: senha,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);

    if (data.data == null) {
      console.log("nenhum usuario encontrado");
      return data;
    } else {
      return 1;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
