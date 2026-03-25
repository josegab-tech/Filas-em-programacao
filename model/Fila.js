class Fila {
  #inicio;
  #fim;
  #qtd;
  #elementos;

  constructor(tamanho = 10) {
    this.#inicio = 0;
    this.#fim = -1;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
  }

  isFull() {
    return this.#qtd === this.#elementos.length;
  }

  isEmpty() {
    return this.#qtd === 0;
  }

  enqueue(elemento) {
    if (!this.isFull()) {
      if (this.#elementos.length - 1 === this.#fim) {
        this.#fim = 0; // fila circular
      } else this.#fim++;

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
    const removido = this.#elementos[this.#inicio];
    if (this.isEmpty()) {
      return null;
    }
    if (this.#inicio === this.#elementos.length - 1) {
      this.#inicio = 0;
    } else this.#inicio++;

    this.#qtd--;

    return removido;
  }

  first() {
    if (!this.isEmpty()) return this.#elementos[this.#inicio];

    return null;
  }

  last() {
    if (!this.isEmpty()) return this.#elementos[this.#fim];
    return null;
  }

  toString() {
    let resultado = "";
    let i= this.#inicio;
    for(let  cont = 0; cont < this.#qtd; cont++){
      resultado += `${this.#elementos[i]} |`;
      if(i === this.#elementos.length-1)
        i=0;
      else
        i++;
    
    }
    return resultado;
  }
}
