import "./navigation";

export function fecharTela(a: string) {
  const tela = document.querySelector(`.${a}`) as HTMLDivElement | null;

  if (tela) {
    tela.style.display = "none";
  }
}

export function renderDisplay(p: number) {
  var content = document.getElementsByClassName("content");
  var teste = document.getElementsByClassName("teste");

  if (p == 1) {
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < content.length; i++) {
      (content[i] as HTMLElement).style.display = "none";
    }
  } else if (p == 2) {
    for (let i = 0; i < content.length; i++) {
      (content[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "none";
    }
  }
}
