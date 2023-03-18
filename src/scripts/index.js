const listCards = document.querySelector('.list-card')

async function fetchApiData() {
  const data = await getApiData()

  renderDataApi(data)
}
fetchApiData()

function renderDataApi(data) {
  listCards.innerHTML = data.map(character => {
    return `<li class="card">
                <img src='${character.image}' alt='${character.name}' class="image" />
                <h3 class="name">${character.name}</h3>
                <p><span>Espécie:</span> ${character.species}</p>
                <p><span>Status:</span> ${character.status}</p>
                <p><span>Origem:</span> ${character.origin.name}</p>
                <p><span>Localização:</span> ${character.location.name}</p>
            </li>`
  })
  animationCard()
}

function animationCard() {
  VanillaTilt.init(document.querySelectorAll('.card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.7
  })
}

async function getApiData() {
  const url = await fetch('https://rickandmortyapi.com/api/character')
  const response = await url.json()
  const data = await response.results
  return data
}
