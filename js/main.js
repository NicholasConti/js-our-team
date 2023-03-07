"use strict";


/**********
 FUNCTIONS
**********/

function appendTeam(arrayTeam){
    printConsole(arrayTeam);
    const container = document.querySelector('.container');
    createCrads(container, arrayTeam.length);
    const cards = document.querySelectorAll('.member');
    printCrad(arrayTeam, cards);

}

//FUNZIONE PER STAMPARE IN CONSOLE GLI OGGETTI
function printConsole(arrayTeam){
    for (let i = 0; i < arrayTeam.length; i++){
        const currentObject = arrayTeam[i];
        console.log(`Membro numero ${i + 1}`);
        for (let key in currentObject){
            console.log(key);
            console.log(currentObject[key]);
        }
    }
}

//FUNZIONE PER CREARE LA STRUTTURA HTML
function createCrads(containerHTML, nMembri){
    let containerFragment = document.createDocumentFragment();
    for (let i = 1; i <= nMembri; i++) {
        const ul = document.createElement('ul');
        ul.classList.add('member');
        // for (let i = 1; i <= 3; i++){
        //     const li = document.createElement('li');
        //     ul.append(li);
        // }
        containerFragment.append(ul);
    }
    containerHTML.append(containerFragment);
}

//FUNZIONE PER STAMPARE LE CHIAVI DEGLI OGGETTI NELL HTML
function printCrad(arrayTeam, cardsHTML){
    for(let i = 0; i < arrayTeam.length; i++){
        const currentCard = cardsHTML[i];
        const currentObject = arrayTeam[i];
        for (let key in currentObject){
            currentCard.innerHTML += (`<li> ${currentObject[key]}</li>`);
        } 
    }
}
/**********
 MAIN
**********/
const team = [
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        foto:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg'
    },
    {
        nome:'Scott Estrada',
        ruolo:'Developer',
        foto:'scott-estrada-developer.jpg'
    },
    {
        nome:'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg'
    }
];


appendTeam(team);
