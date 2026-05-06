function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")

  // pegar a tag img e substituir a foto

  const img = document.querySelector("#profile img")// 'querySelector' = pesquisa pelo seletor

  if(html.classList.contains("light")){
    // caso esteja no tema light, vai estar na foto 'light'
    img.setAttribute("src", "./assets/avatar-light.png") // 'setAttribute' = adicionar/ajustar/modificar um atributo.
  }
  else{
    img.setAttribute("src", "./assets/avatar.png")
  }
}