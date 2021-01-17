'use strict';

const form2 = document.querySelector('#updateBio p');
const spanSelectors = document.createElement('span');
const sWPBirthYear = document.querySelector('#sWPBirthYear');
const sWPName = document.querySelector('#sWPName');
const sWPEyeColor = document.querySelector('#sWPEyeColor');
const sWPGender = document.querySelector('#sWPGender');
const sWPHairColor = document.querySelector('#sWPHairColor');
const sWPHomeWorld = document.querySelector('#sWPHomeWorld');

personBio.map(function (person) {
    const personText = document.createTextNode(Text)
    personText.forEach(function(spanItem) {
        if (spanItem.value === 'birth_year') {
            sWPBirthYear.innerHTML = person.birthYear;
            spanSelectors.appendChild(spanItem);
        };
        if (spanItem.value === 'name') {
            sWPName.innerHTML = person.name;
            spanSelectors.appendChild(spanItem);
        };
        if (spanItem.value === 'eye_color') {
            sWPEyeColor.innerHTML = person.eyeColor;
            spanSelectors.appendChild(spanItem);
        };
        if (spanItem.value === 'gender') {
            sWPGender.innerHTML = person.gender;
            spanSelectors.appendChild(spanItem);
        };
        if (spanItem.value === 'hair_color') {
            sWPGender.innerHTML = person.hairColor;
            spanSelectors.appendChild(spanItem);
        };
        if (spanItem.value === 'homeworld') {
            sWPGender.innerHTML = person.homeWorld;
            spanSelectors.appendChild(spanItem);
        }
    });
});

form2.appendChild(spanSelectors, sWPBirthYear, sWPName, sWPEyeColor, sWPGender, sWPHairColor, sWPHomeWorld);

spanSelectors.addEventListener('change', function (event) {
    console.log(event.target.results)
})


return `
<h1 class="namePersBio">Bio of <span class="persName">${person.name}</span></h1>
<p id="bioModal"> Born in <span class="birthYear">${person.birth_year}</span>, a <span class="eyeColor">${person.eye_color}</span> eyed <span class="Gender">${person.gender}</span> with <span class="hairColor">${person.hair_color}</span> hair, grew up on <span class="homeWorld">${person.homeworld}</span></p>`
