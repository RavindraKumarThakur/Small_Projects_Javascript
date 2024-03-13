
const api_url = 'https://api.quotable.io/random'

async function newQuote(api){
    const response = await fetch(api);
    const quote = response.json();
    console.log(quote["author"]);
}

newQuote(api_url);