"use strict";


/**********
 FUNCTIONS
**********/

function appendTeam(arrayTeam){
    printConsole(arrayTeam);
    const container = document.querySelector('.container');
    printHTML(container, arrayTeam.length);
}

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

function printHTML(containerHTML, nMembri){
    let containerFragment = document.createDocumentFragment();
    for (let i = 1; i <= nMembri; i++) {
        const ul = document.createElement('ul');
        ul.classList.add('member');
        for (let i = 1; i <= 3; i++){
            const li = document.createElement('li');
            ul.append(li);
        }
        containerFragment.append(ul);
    }
    containerHTML.append(containerFragment);
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
