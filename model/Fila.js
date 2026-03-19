class Fila {
  #inicio;
  #fim;
  #qtd;
  #elementos;

  constructor(tamanho = 10) {
    this.#fim = -1;
    this.#inicio = 0;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
  }

  isFull() {
    return this.#fim === this.#elementos.length - 1;
  }

  isEmpty() {
    return this.#fim < this.#inicio;
  }

  enqueue(elemento) {
    if (!this.isFull()) {
      this.#fim++;
      this.#elementos[this.#fim] = elemento;
      this.#qtd++;
      console.log(
        `enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      return true;
    }
    return false;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    this.#qtd--;
    return this.#elementos[this.#inicio++];
  }
  /* Outra versão da linha return acima
    let removido = this.#elementos[this.inicio];
    this.#inicio++;
    return removido;
    */

  /* O ++ será incrementado depois da execução 
    e se fosse antes da variável seria antes.*/

  //enqueue
  //isFull
  //dequeue
  //isEmpty

  first() {
    if (!this.isEmpty) {
      return this.#elementos[this.#inicio];
    }
  }

  last() {
    if (!this.isEmpty) {
      return this.#elementos[this.#fim];
    }
  }

  toString() {
    let resultado = "";
    for (let i = this.#inicio; i <= this.#fim; i++) {
      resultado += `${this.#elementos[i]} | `;
    }
    return resultado;
  }
}
