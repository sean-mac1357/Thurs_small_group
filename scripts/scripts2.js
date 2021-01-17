'use strict';

function getBio(data) {
    const url = `https://swapi.dev/api/people/?search=${data}`
    get(url).then(function (response) {
        createPersonBio(response.results);
        console.log(response.results)
    })
}

function getPeople() {
    const url = `https://swapi.dev/api/people/`;
    get(url).then(function (response) {
        // console.log(response.results);
        createPersonList(response.results);
    })
}

function createPersonList(personList) {
    const form1 = document.querySelector("#changePerson");
    const personSelect = document.createElement("select");
    
    personList.map(function (person) {
        const personOption = document.createElement("option")
        personOption.value = person.name;
        personOption.innerHTML = person.name;
        personSelect.appendChild(personOption);
    });
    form1.appendChild(personSelect);
    
    personSelect.addEventListener('change', function (event) {
        getBio(event.target.value);
        console.log(event.target.value);
    });
}

function createPersonBio(personBio, personSelect) {
    const form2 = document.querySelector("#updateBio p label");
    const paragraph = document.createElement("span");

    personBio.map(function (person) {
        const personText = document.createElement("textarea");
        personText.value = person.birth_year;
        personText.innerHTML = person.birth_year;
        paragraph.appendChild(personText)
    })
    form2.appendChild(paragraph);

}

getPeople()
getBio("Luke Skywalker")
