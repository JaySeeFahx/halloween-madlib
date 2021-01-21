// 1. Declare variables and capture input.
let adjective1 = prompt('Please type an adjective.');
let firstName1 = prompt('Please type a name.');
let adjective2 = prompt('Please type an adjective.');
let noun1 = prompt('Please type an noun.');
let verb1 = prompt('Please type a verb.');
let animal = prompt('Please type an animal.');
let verb2 = prompt('Please type a verb ending in -ing.');
let adverb1 = prompt('Please type an adverb.');
let adjective3 = prompt('Please type an adjective.');
let firstName2 = prompt('Please type a name.');
let adjective4 = prompt('Please type an adjective.');
let noun2 = prompt('Please type a noun.');
let verb3 = prompt('Please type a verb ending in -ing.');
let pluralNoun = prompt('Please type a plural noun.');
let verb4 = prompt('Please type a verb ending in -ing.');

// 2. Combine the input with other words to create a story.

let story = `<p>They say my school is haunted; my ${adjective1} friend ${firstName1} says she saw a ${adjective2} ${noun1} floating at the end of the hall near the cafeteria. 
Some say if you ${verb1} down that hallway at night, you'll hear a ${animal} ${verb2} ${adverb1}. 
My ${adjective3} friend ${firstName2} saw a ${adjective4} ${noun2} ${verb3} under one of the tables once. 
I hope I never see any ${pluralNoun} ${verb4}; eating lunch there is scary enough!</p>`;

// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = story;