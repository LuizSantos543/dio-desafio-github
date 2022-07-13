function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'José',
    idade: 25,
}

const animal = {
    nome: 'Stiven',
    idade: 5,
    raca: 'caramelo'
}

//console.log(calculaIdade.call(animal, 20));
//console.log(calculaIdade.apply(animal, [20]));