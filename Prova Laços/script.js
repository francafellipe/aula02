document.getElementById(`btnIniciar`).addEventListener(`click`,function(){
    calcularMedia()
})

function calcularMedia(){
    var quantidadeAlunos = prompt(`Qual a Quantidade de Alunos na turma ?`)
quantidadeAlunos = parseInt(quantidadeAlunos)

var somatoriodeNotas = 0

var quantidadeNotas = 1 

let maiorNota = -Infinity

let menorNota = Infinity

while (quantidadeNotas <= quantidadeAlunos){
    let notadoaluno = prompt(`Qual a nota do aluno ${quantidadeNotas} ?`)
    notadoaluno = parseFloat(notadoaluno)
    somatoriodeNotas = notadoaluno + somatoriodeNotas
    
    if (notadoaluno > maiorNota){
        maiorNota = notadoaluno
    } else if (notadoaluno < menorNota){
        menorNota = notadoaluno
    }
    quantidadeNotas++
}

let media = somatoriodeNotas/quantidadeAlunos
media = media.toFixed(2)

document.getElementById(`resultado`).innerText = `Professor a sua turma teve a média de ${media} pontos a maior nota = ${maiorNota} e a menor nota = ${menorNota}`
}