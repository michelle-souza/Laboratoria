let nome = prompt('Bem-Vindo(a)! \n Qual é o seu nome?')
let participar = prompt(nome + ', deseja participar do nosso quiz? \n 1. Sim \n 2. Não')


if (participar == 1) {

let perguntaUm = prompt('Pergunta número um: \n - Qual é o maior osso do corpo humano? \n 1. Fêmur \n 2. Tíbia \n 3. Coluna')
let perguntaDois = prompt('Pergunta número dois: \n - Qual material é extraído da seringueira? \n 1. Papel \n 2. Madeira \n 3. Látex')
let perguntaTres = prompt('Pergunta numero três: \n - Qual é a capital dos Estados Unidos? \n 1. Nova York \n 2. California \n 3. Washington')

    if (perguntaUm == 1) {
        let perguntaUmCorreta = document.getElementById('correta1');
        perguntaUmCorreta.innerHTML = 'Resposta 1 Correta'
        } else {
        let perguntaUmIncorreta = document.getElementById('errada1');
        perguntaUmIncorreta.innerHTML = 'Resposta 1 Incorreta'
        }
        
    if (perguntaDois == 3) {
        let perguntaDoisCorreta = document.getElementById('correta2');
        perguntaDoisCorreta.innerHTML = 'Resposta 2 Correta'
        } else {
        let perguntaDoisIncorreta = document.getElementById('errada2');
        perguntaDoisIncorreta.innerHTML = 'Resposta 2 Incorreta'
        }
    if (perguntaTres == 3) {
        let perguntaTresCorreta = document.getElementById('correta3');
        perguntaTresCorreta.innerHTML = 'Resposta 3 Correta'
        } else {
        let perguntaTresIncorreta = document.getElementById('errada3');
        perguntaTresIncorreta.innerHTML = 'Resposta 3 Incorreta'
            
        let idBemVinda = document.getElementById('parabens');
            idBemVinda.innerHTML = 'Parabéns ' + nome + ' !'
    }           
    
} else if (participar == 2) {
   alert (nome + ' , tchauzinho!');   
} 






