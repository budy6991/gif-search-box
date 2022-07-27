const img = document.querySelector('img')
fetch('https://api.giphy.com/v1/gifs/translate?api_key=jWd7HkgR1P1A2dOxpycwD4RHJMtgwzMf&s=spain', {mode : 'cors'})

.then((response) => response.json())

.then((response) => img.src = response.data.images.original.url) 