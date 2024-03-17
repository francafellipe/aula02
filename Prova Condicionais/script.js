var nomeUsuario = prompt(`Qual o seu nome?`);

var pesoUsuario = prompt(`Qual o seu peso?`);
pesoUsuario = parseFloat(pesoUsuario);

var alturaUsuario = prompt(`Qual a sua altura em cm?`);
alturaUsuario = parseFloat(alturaUsuario) / 100; // Convertendo altura para metros

var imc = pesoUsuario / (alturaUsuario * alturaUsuario);

if (imc < 16) {
    document.write(`Nome : ${nomeUsuario} \n IMC : ${imc.toFixed(2)} \n Diagnostico : Baixo Peso muito grave.`);
} else if (imc < 17) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Baixo Peso grave.`);
} else if (imc < 18.5) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Baixo Peso.`);
} else if (imc < 25) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Peso Normal.`);
} else if (imc < 30) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Sobrepeso.`);
} else if (imc < 35) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Obesidade Grau 1.`);
} else if (imc < 40) {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Obesidade Grau 2.`);
} else {
    document.write(`Nome : ${nomeUsuario} \n IMC: ${imc.toFixed(2)}\n Diagnostico : Obesidade Grau 3.`);
}
