function resultado(num1, num2){
    const primeiraFrase = comparaNumero(num1, num2);
	const segundaFrase = maiorMenor(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;  
}

function comparaNumero(num1, num2){
    if (num1 == num2){
        return `${num1} e ${num2} são iguais.`;
    }
    else{
        return `${num1} e ${num2} não são iguais.`;
    }
}

function maiorMenor(num1, num2){
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if(soma > 10){
        comparaDez = 'maior';
    }

    if(soma > 20){
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;

}
console.log(resultado(10, 11));


