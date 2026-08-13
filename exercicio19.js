function CalcularMedia(nota1, nota2) {
    return (nota1 + nota2) /2;    
}
 function verificarSituacao(media) {
    if (media>=6) {
        return"aprovado"
    } else {
        return "reprovado"
    }
 }
 
 let media = CalcularMedia(8,7);
 let situacao = verificarSituacao(media);

 console.log(media)
 console.log(situacao)