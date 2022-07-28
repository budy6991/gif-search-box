const img = document.querySelector('img');
const userInput = document.getElementById('gifSearch');

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=cats', { mode: 'cors' })
  const catData = await response.json()
  img.src = catData.data.images.original.url;
}

getCats()

document.querySelector('.search').onclick = () => {
  if (userInput.value === '') {
    location.reload();
  } else if (userInput.value != '') {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=${userInput.value}`, { mode: 'cors' })
    .then(function(response) {
      return response.json()
    })
    .then(function(response) {
      img.src = response.data.images.original.url
    }).catch(e => console.error(e)
    )
  }
};
