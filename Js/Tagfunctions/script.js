const showPhrase = (phrase, name, job) => {
   console.log(phrase[0], name, phrase[1], job, phrase[2])
}

const userName = 'Antonio';
const job = "front-end development";
showPhrase`Hello, my name is ${userName} and I work with ${job}`;