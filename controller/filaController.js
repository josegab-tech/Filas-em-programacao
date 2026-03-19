const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");

  if (minhaFila.enqueue(novoElemento.value)) {
    mostrarFila(); // mostrar a pilha
    novoElemento.value="";
    novoElemento.focus();
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila(){
    const filaElemento  = document.getElementById("lbPessoasFila");
    filaElemento.textContent = minhaFila.toString();
}

  /* Implemente uma função removerElemento() que utilize o método 
dequeue() da fila para remover o primeiro elemento inserido (respeitando o conceito FIFO).
 Em seguida, exiba o valor removido utilizando um alert, tratando também o caso em que a fila esteja vazia.
*/