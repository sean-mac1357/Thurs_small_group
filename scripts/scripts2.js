'use strict';

function getPerson(person) {
    const url = `https://swapi.dev/api/?people=${person}`;
    get(url).then(function (response) {
        updateBody(response.value);
    })
}

function getPeople() {
    const url = `https://swapi.dev/api/people/`
    get(url).then(function (response) {
        console.log(response.results);
        createPersonList(response.results)
    })
}

function updateBody(person) {
    const paragraph = document.querySelector('div #modal-body p');
    paragraph.innerHtml = person;
}

function createPersonList(personList) {
    const form = document.querySelector("#changePerson");
    const personSelect = document.createElement("select");

    personList.map(function(person) {
        const personOption = document.createElement("option")
        personOption.value = person.name;
        console.log(personOption.value);
        personOption.innerHTML = person.name;
        personSelect.appendChild(personOption);
    });
    form.appendChild(personSelect);

    personSelect.addEventListener('change', function (event) {
        getPerson(event.target.value);
    })
}

getPeople()
getPerson('name')