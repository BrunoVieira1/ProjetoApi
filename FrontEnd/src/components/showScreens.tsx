import "./navigation";

export function fecharTela(a: string) {
  const tela = document.querySelector(`.${a}`) as HTMLDivElement | null;

  if (tela) {
    tela.style.display = "none";
  }
}

export function renderDisplay(p: number) {
  var teste = document.getElementsByClassName("teste");
  var product = document.getElementsByClassName("productScreen");
  var productEntry = document.getElementsByClassName("productEntry");
  var productOutput = document.getElementsByClassName("productOutput");

  if (p == 1) {
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < product.length; i++) {
      (product[i] as HTMLElement).style.display = "none";
    }
    for (let i = 0; i < productEntry.length; i++) {
      (productEntry[i] as HTMLElement).style.display = "none";
    }
  } else if (p == 2) {
    for (let i = 0; i < product.length; i++) {
      (product[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "none";
    }
    for (let i = 0; i < productEntry.length; i++) {
      (productEntry[i] as HTMLElement).style.display = "none";
    }
  } else if (p == 3) {
    for (let i = 0; i < productEntry.length; i++) {
      (productEntry[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "none";
    }
    for (let i = 0; i < product.length; i++) {
      (product[i] as HTMLElement).style.display = "none";
    }
  } else if (p == 4) {
    for (let i = 0; i < productOutput.length; i++) {
      (productEntry[i] as HTMLElement).style.display = "block";
    }
    for (let i = 0; i < teste.length; i++) {
      (teste[i] as HTMLElement).style.display = "none";
    }
    for (let i = 0; i < product.length; i++) {
      (product[i] as HTMLElement).style.display = "none";
    }
  }
}
