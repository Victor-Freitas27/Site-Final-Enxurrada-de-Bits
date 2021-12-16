function busca() {
  let display = document.querySelectorAll(".div-display");
  let tagInput = document.querySelector("#input-busca");
  let input = tagInput.value;
  let arr = Array.from(display);
  

  if (limpo) {
      for (const key in arr) {
          if (Object.hasOwnProperty.call(arr, key)) {
              const element = arr[key];
              if (element.innerHTML.includes(input)) {
                  console.log("Houve ocorrencia");
                  
              }
              else {
                  element.innerHTML = "";
                  limpo = false;
              }
          }
      }
      let button = document.querySelector("#idBotao");
      button.classList.remove("botaoL")
      button.classList.add("botaoX");
      tagInput.value = "";
  }
  else {
      for (const key in arr) {
          if (Object.hasOwnProperty.call(arr, key)) {
              const element = arr[key];
              element.innerHTML = backup[key];
              limpo = true;
          }
      }
      let button = document.querySelector("#idBotao");
      button.classList.remove("botaoX")
      button.classList.add("botaoL")
      tagInput.value = "";
  }

}

function toBackup() {
  let display = document.querySelectorAll(".div-display");
  let arr = Array.from(display);
  for (const key in arr) {
      if (Object.hasOwnProperty.call(arr, key)) {
          const element = arr[key];
          let tam = backup.push(element.innerHTML)
      }
  }
  console.log(backup);
}

let backup = [];
toBackup();

let limpo = true;
let botao = document.querySelector("#idBotao");
botao.onclick = busca;
//https://www.pikpng.com/pngl/m/153-1535108_file-cancel-icon-svg-icono-de-x-png.png