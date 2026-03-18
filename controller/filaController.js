const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");

  if (minhaFila.enqueue(novoElemento.value)) {
    //pode ou não usar "=== true"
    console.log(minhaFila.toString); // mostrar a pilha
  } else {
    alert("Fila cheia!");
  }
  
}
