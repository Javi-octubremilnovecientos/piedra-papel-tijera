const OpcionesMaquina = document.querySelectorAll(".Uno img");
const OpcionesUsuario = document.querySelectorAll(".Tres img");
const Maquina = document.querySelector(".Dos #maquina");
const Usuario = document.querySelector(".Dos #usuario");
const boton = document.querySelector(".main button");
const ganar = document.getElementById("ganar");
const perder = document.getElementById("perder");

OpcionesUsuario.forEach((Op) => {
  Op.addEventListener("click", (e) => {
    let eleccionUsuario = e.target.id;
    Op.style.mixBlendMode = "multiply";
    
    for (let k = 0; k < OpcionesMaquina.length; k++) {
      OpcionesMaquina[k].style.animationPlayState = "paused";
    }
    let eleccionMaquina = jugar();
    Maquina.style.backgroundImage = `url(assets//medios/${eleccionMaquina}.png)`;
    Usuario.style.backgroundImage = `url(assets//medios/${eleccionUsuario}.png)`;

    setTimeout(() => {
      switch (eleccionMaquina) {
        case "PIEDRA":
          if (eleccionUsuario == "PIEDRA") {
            boton.style.display = "block";
          } else if (eleccionUsuario == "PAPEL") {
            ganar.style.display = "block";
            boton.style.display = "block";
          } else {
            perder.style.display = "block";
            boton.style.display = "block";
          }
          break;
        case "PAPEL":
          if (eleccionUsuario == "PAPEL") {
            boton.style.display = "block";
          } else if (eleccionUsuario == "TIJERA") {
            ganar.style.display = "block";
            boton.style.display = "block";
          } else {
            perder.style.display = "block";
            boton.style.display = "block";
          }
          break;
        case "TIJERA":
          if (eleccionUsuario == "TIJERA") {
            boton.style.display = "block";
          } else if (eleccionUsuario == "PIEDRA") {
            perder.style.display = "block";
            boton.style.display = "block";
          } else {
            perder.style.display = "block";
            boton.style.display = "block";
          }
          break;
      default:
          break;
      }
    }, 900);
  });
});

const opciones = ["PIEDRA", "PAPEL", "TIJERA"];

function jugar() {
  return opciones[Math.floor(Math.random() * 3)];
}

boton.addEventListener("click", () => {
  location.reload();
});
