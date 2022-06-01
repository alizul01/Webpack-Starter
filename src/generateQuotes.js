import axios from 'axios'

function generateQuotes() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com/', config)
        .then(res => {
            document.getElementById('jokes').innerHTML = res.data.joke;
        })
}

export default generateQuotes;