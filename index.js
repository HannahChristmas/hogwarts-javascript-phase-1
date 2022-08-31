
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

            ul.textContent = character.name
            ulArea.appendChild(ul)
        }
    })
}