require('dotenv').config()

console.log(process.env)

const img = document.querySelector('img');
const userInput = document.getElementById('userInput');
const errorContainer = document.getElementById('error-container');

const makeFetchRequest = async () => {
  searchparam = userInput.value !== '' ? userInput.value : 'cats';
  try {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=${searchparam}`, { mode: 'cors' });
  const responseData = await response.json();
  img.src = responseData.data.images.original.url;
  errorContainer.textContent = '';
  } catch(err) {
    if (err instanceof TypeError) {
    errorContainer.textContent = 'Only include characters in your input';
    err.textContent = errorContainer.textContent;
    }
    else errorContainer.textContent = 'Something went wrong'
  }
};

document.querySelector('.search').onclick = () => {
  makeFetchRequest()
};

makeFetchRequest();