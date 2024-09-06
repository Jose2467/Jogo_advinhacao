varH1 = document.querySelector('h1');

varH1.innerHTML = "Nome Secreto";

varP = document.querySelector('p');

varP.innerHTML = " Digite um numero de 1 até 100";

let secret_number = Math.floor(Math.random()*100);
let tentativas = 1;

function verificarChute(){

    let guess = document.querySelector('input').value;
    document.getElementById('reiniciar').removeAttribute('disabled');

    if( guess == secret_number){
       
        let tentativa = tentativas > 1? 'vezes': 'vez';
        varH1.innerHTML = (`Parabens, acertou! \n Voce tentou ${tentativas} ${tentativa}`);
    }
    else{

        if(guess < secret_number){

            varH1.innerHTML = ('Tente novamente., o numero é maior');

        }
        else{

            varH1.innerHTML = ('Tente novamente., o numero é menor');

        }
        tentativas++;
    }

}

