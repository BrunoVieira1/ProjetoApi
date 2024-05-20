import "./navigation";

export function renderDisplay(screenClass: number, closeScreen: boolean) {
  const classes = ["teste", "productScreen", "productEntry", "productOutput"];
  const pegarClasse = classes[screenClass - 1];

  // Primeiro, ocultar todos os elementos
  classes.forEach((screen) => {
    const elementos = document.getElementsByClassName(screen);

    for (let i = 0; i < elementos.length; i++) {
      (elementos[i] as HTMLElement).style.display = "none";
    }
  });

  // Em seguida, mostrar apenas o grupo de elementos desejado
  if (pegarClasse) {
    const elementos = document.getElementsByClassName(pegarClasse);
    for (let i = 0; i < elementos.length; i++) {
      (elementos[i] as HTMLElement).style.display = "block";
    }
  }

  if (closeScreen == true) {
    const elementos = document.getElementsByClassName(pegarClasse);
    for (let i = 0; i < elementos.length; i++) {
      (elementos[i] as HTMLElement).style.display = "none";
    }
  }
}
