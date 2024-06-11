export default function Home() {
  var isLogged = localStorage.getItem("isLogged");
  if (isLogged == "1") {
    return (window.location.href = "/home");
  } else {
    return (window.location.href = "/signin");
  }
}
