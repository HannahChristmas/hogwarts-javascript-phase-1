
fetch('http://hp-api.herokuapp.com/api/characters')
    .then((res) => res.json())
    .then((characterData) => {
        allCharacters = characterData
    })

let allCharacters = [];

