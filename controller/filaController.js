const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");
  if (minhaFila.enqueue(novoElemento.value)) {
    mostrarFila();
    novoElemento.value = ""; // mostrar a fila
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = minhaFila.toString();
  for (let item of minhaFila){
    const listItem = document.createElement("li");
    listItem.textContent = item;
    filaElemento.appendChild(listItem);
  };


}

function removerElemento() {
  const itemRemovido = minhaFila.dequeue();

  if (itemRemovido !== null) {
    mostrarFila(); // Atualiza o label na tela
    alert(`Removido: ${itemRemovido}`);
  } else {
    alert("A fila já está vazia!");
  }
}


  function buscarElemento(){
    let indice = 0;
    let encontrado = false;
    const elemento = document.getElementById("txtnovoNome"); // pegar o input
    for (let item of minhaFila){ // percorrer a fila
      indice ++;
      
      if(elemento.value === item){
        alert("Encontrado na posição: " + indice +"°"  );
        encontrado = true;
      }
      if(!encontrado){
        alert("Não encontrado")
      }
        
      
    }
  }

  // criar nova classe 
  // nome , cpf , datahora
  // inserir a classe na fila.