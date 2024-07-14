
// Afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStutus: number = 0;


// Estou afirmando que o status statusAtual é de fato um numero!
mudaStutus = statusAtual as number;

// Outra maneira de afirma o tipo.

mudaStutus = <number>statusAtual

console.log(mudaStutus);

let query: unknown = 'pizza';

let searchTerm: string = query as string;

console.log('Search TERM: ', searchTerm)

