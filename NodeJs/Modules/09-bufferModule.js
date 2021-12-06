console.clear();

// buffer.alloc cria um buffer de x caracteres e insere ( ou não, o 2 parâmetro é opcional ) o valor dentro do buffer
const bf = Buffer.alloc(15, 'Antonio Pacheco')

// bf.ToString converte o buffer armazenado em bf em string
console.log(bf.toString())

// Buffer.from cria um buffer com a palavra que está no parâmetro
const bf1 = Buffer.from('Olá, ');
const bf2 = Buffer.from('Mundo! ');

// Buffer.concat cria um buffer a partir de dois ou mais buffers armazenados em um array
const bufferConcat = Buffer.concat([bf1, bf2]);
console.log(bufferConcat.toString())

console.log(Buffer.from('TenLetters'))
