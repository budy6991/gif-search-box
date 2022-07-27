const img = document.querySelector('img');
const searchBox = document.getElementById('gifSearch');

function refreshPage() {
  window.location.reload();
}

fetch('https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=cats', { mode: 'cors' })

  .then((response) => response.json())

  .then((response) => img.src = response.data.images.original.url);

document.querySelector('.search').onclick = () => {
  if (searchBox.value === '') {
    location.reload();
  } else if (searchBox.value != '') {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=${searchBox.value}`, { mode: 'cors' })

      .then((response) => response.json())

      .then((response) => img.src = response.data.images.original.url);
  }
};
