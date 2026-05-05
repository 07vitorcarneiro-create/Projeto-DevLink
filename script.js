function toggleMode(){
  const html = document.documentElement

  if(html.classList.contains("dark")){
    html.classList.remove("dark")
    html.classList.add("light")
  }
  else{
    html.classList.add("light")
  }

  // pegar a tag img e substituir a foto

  const img = document.querySelector("#profile img")// 'querySelector' = pesquisa pelo seletor

  if(html.classList.contains("light")){
    // caso esteja no tema light, vai estar na foto 'light'
    img.setAttribute("src", "./assets/avatar-light.png") // 'setAttribute' = adicionar/ajustar/modificar um atributo.
  }
}

function modeToggle(){
  const html = document.documentElement

  if(html.classList.contains("light")){
    html.classList.remove("light")
    html.classList.add("dark")
  }
  else{
    html.classList.add("dark")
  }

  // pegar a tag img e substituir a foto

  const img = document.querySelector("#profile img") // 'querySelector' = pesquisa pelo seletor

  if(html.classList.contains("dark")){
    // caso esteja no tema light, vai estar na foto 'light'
    img.setAttribute("src", "./assets/avatar.png") // 'setAttribute' = adicionar/ajustar/modificar um atributo.
  }
}