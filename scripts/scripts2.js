'use strict';

function getPeople() {
    const url = `https://swapi.dev/api/people/`
    get(url).then(function (response) {
        console.log(response.results);
        createPersonList(response.results)
    })
}

function createPersonList(personList) {
    const form = document.querySelector("#changePerson");
    const personSelect = document.createElement("select");

    personList.map(function(person) {
        const personOption = document.createElement("option")
        personOption.value = person.name;
        personOption.txt = person.name;
        personSelect.appendChild(personOption);
    });
}

getPeople()
