console.log("Yay!");



let cats;
let dogs;

const printToDom = (stringToPrint, divID) => {
    thingToPrint = document.getElementById(divID);
    thingToPrint.innerHTML = stringToPrint;
}

const addButtonEvent = () => {
    let buttonToAdd = document.getElementById('button');
    buttonToAdd.addEventListener("click", xhr1cats);
}

function WTF () {
    console.log("YAY!");
}

function doSHIT (catsData, dogsData) {
    console.log("CatsData: ", catsData);
    console.log("DogsData: ", dogsData);
    let allAnimalsArray = [];
    let jumbledArray = [];
    catsData.cats.forEach((item) => {
        allAnimalsArray.push(item);
    })
    dogsData.dogs.forEach((item) => {
        allAnimalsArray.push(item);
    })
    console.log("All The Animals: ", allAnimalsArray);
    while( allAnimalsArray.length > 0){
        let randomNumber = Math.floor(Math.random() * allAnimalsArray.length);
        let animalToAdd = allAnimalsArray.splice(`${randomNumber}`, 1);
        console.log("animalToAdd: ", animalToAdd);
        jumbledArray.push(animalToAdd);
        console.log("JumbledArray: ", jumbledArray);
    }
    let stringToPrint = "";
    jumbledArray.forEach((item) => {
        stringToPrint += `<div>`;
        if(item[0].numberOfToes){
            stringToPrint += `<img src="${item[0].imageUrl}">`;
        } else {
            stringToPrint += `<img src="${item[0].url}">`;
        }
        stringToPrint += `<h1>${item[0].name}</h1>`;
        stringToPrint += `<h3>${item[0].color}</h3>`;
        stringToPrint += `</div>`;
    })
    printToDom(stringToPrint, "output");
    }


function xhr2Dogs(catsData) {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener('load', nestedFunction);
    myRequest.addEventListener("error", WTF);
    myRequest.open('GET', `https://random-dogs-api.herokuapp.com/dogs/${dogs}`)
    myRequest.send();

    function nestedFunction () {
        let dogsData = JSON.parse(this.responseText);
        doSHIT(catsData, dogsData);
    }
}

function catsJSON () {
    let catsData = JSON.parse(this.responseText);
    console.log("CatsDATA: ", catsData);
    xhr2Dogs(catsData);
}

const xhr1cats = () => {
    let myRequest = new XMLHttpRequest;
    let inputValue = document.getElementById('input').value;
    console.log("Input Value: ", inputValue);
    let randomNumber = Math.floor(Math.random() * inputValue) + 1;
    console.log("Random Number: ", randomNumber);
    cats = randomNumber;
    dogs = inputValue - randomNumber;
    console.log("Cats: ", cats);
    console.log("Dogs: ", dogs);
    myRequest.addEventListener('load', catsJSON);
    myRequest.addEventListener('error', WTF);
    myRequest.open('GET', `https://random-dogs-api.herokuapp.com/cats/${cats}`);
    myRequest.send();
}

const startApplication = () => {
    addButtonEvent();
}

startApplication();