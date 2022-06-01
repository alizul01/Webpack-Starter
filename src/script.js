import generateQuotes from './generateQuotes'
import './styles/main.scss'
import contact from './assets/contact.svg'

const contactimg = document.getElementById('contactImg');
contactimg.src = contact;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateQuotes);

console.log(generateQuotes());
console.log('Hello World!');