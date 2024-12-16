 const Imgs = document.querySelectorAll(".Tres img")
  const Maquina = document.querySelector(".Dos .result #maquina")
  const Usuario = document.querySelector(".Dos .result #usuario")

  console.log(Usuario)
Imgs.forEach((img)=>{
    img.addEventListener("click",(e)=>{
      let objeto = e.target.id 
    
     switch (objeto) {
        case "piedra":
             Usuario.style.backgroundImage = "url(../medios/PIEDRA.png)"
            break;
        case "papel":
              Usuario.style.backgroundImage = "url(../medios/PAPEL.png)"
            break;
        case "tijera":
              Usuario.style.backgroundImage = "url(../medios/TIJERA.png)"
            break;
     
        default:
            break;
     }
    })
})