function calcularDesconto(preco, percentual) {
    let valorDesconto = preco * percentual / 100;
    return preco - valorDesconto;
}

let valorFinal = calcularDesconto(150, 20);
console.log(valorFinal);
