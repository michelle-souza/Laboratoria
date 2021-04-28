let nome = prompt('Bem-Vindo(a)! \n Qual é o seu nome?')
let participar = prompt(nome + ', deseja participar do nosso quiz? \n 1. Sim \n 2. Não')
document.getElementById('parabens');
document.write('Parabéns!' + nome)


if (participar == 1) {

let perguntaUm = prompt('Pergunta número um: \n - Qual é o maior osso do corpo humano? \n 1. Fêmur \n 2. Tíbia \n 3. Coluna')
let perguntaDois = prompt('Pergunta número dois: \n - Qual material é extraído da seringueira? \n 1. Papel \n 2. Madeira \n 3. Látex')
let perguntaTres = prompt('Pergunta numero três: \n - Qual é a capital dos Estados Unidos? \n 1. Nova York \n 2. California \n 3. Washington')

    if (perguntaUm == 1) {
        document.getElementById('corretas');
        document.write('Resposta Correta')
        } else {
        document.getElementById('incorretas');
        document.write('Resposta Incorreta')
        }
        
    if (perguntaDois == 3) {
        document.getElementById('corretas');
        document.write('Resposta Correta')
        } else {
        document.getElementById('incorretas');
        document.write('Resposta Incorreta')
        }
    if (perguntaTres == 3) {
        document.getElementById('corretas');
        document.write('Resposta Correta')
        } else {
        document.getElementById('incorretas');
        document.write('Resposta Incorreta')
        }           
    
} else if (participar == 2) {
   alert (nome + ' ,tchauzinho!');   
} 






