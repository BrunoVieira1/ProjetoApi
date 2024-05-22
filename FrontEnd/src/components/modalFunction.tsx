import "./modalAdd";

export function ModalFunction(classModal: number) {
  const classes = [
    "modalProduct",
    "modalProductEntry",
    "modalProductOutput",
    "modalFunctionary",
  ];
  const getClass = classes[classModal - 1];

  classes.forEach((screen) => {
    const elementos = document.getElementsByClassName(screen);

    for (let i = 0; i < elementos.length; i++) {
      (elementos[i] as HTMLElement).style.display = "none";
    }
  });

  if (getClass) {
    const elementos = document.getElementsByClassName(getClass);
    for (let i = 0; i < elementos.length; i++) {
      (elementos[i] as HTMLElement).style.display = "block";
    }
  }
}
