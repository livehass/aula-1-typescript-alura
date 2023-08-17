export class NegociacaoController {
    constructor() {
        this.inputData = document.getElementById("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        console.table(this.inputData);
        console.table(this.inputQuantidade);
        console.table(this.inputValor);
    }
}
