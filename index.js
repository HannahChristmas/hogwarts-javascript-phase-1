
fetch('http://hp-api.herokuapp.com/api/characters')
    .then((res) => res.json())
    .then((characterData) => {
        allCharacters = characterData
    })

let allCharacters = [];

const dropdown = document.getElementById('house-dropdown');
dropdown.addEventListener('change', houseChangeEventHandler);

const ulArea = document.querySelector('ul');

function houseChangeEventHandler(e) {
    ulArea.innerHTML = '';
    let selectedHouse = e.target.value;

    allCharacters.forEach(character => {
        if(character.house === selectedHouse){
            const ul = document.createElement('ul')
                ul.addEventListener('mouseover', (e) => {
                    e.target.style.color = 'purple';
                })
                ul.addEventListener('mouseout', (e) => {
                    e.target.style.color = 'black';
                })
                ul.addEventListener('click', (e) => {
                    e.target.style.color = 'green';
                })
                ul.addEventListener('click', renderCharacterCard)

            ul.textContent = character.name
            ulArea.appendChild(ul)
        }
    })
}

const character = []
let ulCharacter = document.querySelector('.character-container')

function renderCharacterCard(e) { 
    let character = allCharacters.filter(character => character.name === e.target.outerText)[0];

    const ul = document.createElement('ul')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
   
    img.src = `${character.image}`
    h3.textContent = `House: ${character.house}`

    ul.append(img, h3)
    document.querySelector('.float-container').append(ul)
    allCharacters.push(ul);
}