

// Things to change
const nameBox = document.getElementById('name');
const pronouns = document.getElementById('pronouns-display');
const counterBox = document.getElementById('name-counter');
const topColor = document.getElementById('top-color')
const bottomColor = document.getElementById('bottom-color')

// How to change them

const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const colorButton = document.getElementById('color-button');



// counter variable
let counter = 0;

// add event listeners

nameButton.addEventListener('click', () => {
    console.log(nameBox.innerHTML);
    const newName = nameInput.value;
    let oldName = nameBox.innerHTML;
    if(newName !== oldName){
        counter ++;
        counterBox.textContent = counter;
        nameBox.textContent = newName;
    }
    


})

pronounButton.addEventListener('click', () => {
    console.log('pronoun button clicked!');
    const newPronouns = pronounInput.value;
    pronouns.textContent = `(${newPronouns})`;
})

colorButton.addEventListener('click', () => {
    
    let number1 = Math.floor((Math.random() * 255));
    let number2 = Math.floor((Math.random() * 255));
    let number3 = Math.floor((Math.random() * 255));
    console.log(number1);
    console.log(number2);
    console.log(number3);

    topColor.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
    bottomColor.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
})