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

    return data;
  } catch (error) {
    console.error(error);
  }
};
