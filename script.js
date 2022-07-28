const img = document.querySelector('img');
const userInput = document.getElementById('userInput');
const errorContainer = document.getElementById('error-container')

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=cats', { mode: 'cors' })
  const catData = await response.json()
  img.src = catData.data.images.original.url;
}

async function getUserInput() {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=${userInput.value}`, { mode: 'cors' })
    const responseData = await response.json()
    img.src = responseData.data.images.original.url
}

document.querySelector('.search').onclick = () => {
  if (userInput.value === '') {
    location.reload();
  } else if (userInput.value != '') {
    getUserInput().catch(err=> {
      err.textContent = 'Ups! Something went wrong!'
      errorContainer.textContent = err.textContent
      location.reload()
    })
  }
};

getCats()