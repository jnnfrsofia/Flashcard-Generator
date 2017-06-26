//VARIABLE REQUIRED TO ACCESS FS, INQUIRER, AND THE TWO FLASHCARD JS FILES


var fs = require('fs');
var inquirer = require('inquirer');
var basicFlashCard = require('./BasicCard');
var clozeFlashCard = require('./ClozeCard');

//Prompt the user with two options: to create a flashcard or to display all cards created so far

inquirer.prompt([{
    name: 'command',
    message: 'What would you like to do?',
    type: 'list',
    choices: [{
        name: 'create-flashcard'
    }, {
        name: 'show-all-cards'
    }]
}]).then(function(answer) {
    if (answer.command === 'create-flashcard') {
        addCard();
    } else if (answer.command === 'show-all-cards') {
        showCards();
    }
});

//Functions for creating flashcards (basic and cloze) and for displaying all cards created so far

//addCard function 

//asks the user which type of card they'd like to create
function addCard() {
    inquirer.prompt([{
        name: 'cardType',
        message: 'Which type of card would you like to create?',
        type: 'list',
        choices: [{
            name: 'basic-flashcard'
        }, {
            name: 'cloze-flashcard'
        }]

        //basic card prompt-->asks the user for the front and back portions of the card
    }]).then(function(answer) {
        if (answer.cardType === 'basic-flashcard') {
            inquirer.prompt([{
                name: 'front',
                message: 'What is the question?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide a question');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'back',
                message: 'What is the answer?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide an answer');
                        return false;
                    } else {
                        return true;
                    }
				}
			//variable which uses the basicFlasCard constructor to create a new basic card based on the user's input	
            }]).then(function(answer) {
                var newBasic = new basicFlashCard(answer.front, answer.back);
                newBasic.create();


            });

        } else if (answer.cardType === 'cloze-flashcard') {
            inquirer.prompt([{
                name: 'fullText',
                message: 'What is the full text?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the full text');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'cloze',
                message: 'What is the cloze portion?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the cloze portion of text');
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                var fullText = answer.fullText;
                var cloze = answer.cloze;
                var newCloze = new clozeFlashCard(fullText, cloze);
                newCloze.create();


            });
        }

    });

};

function showCards() {
	fs.readFile('./log.txt', 'utf8', function(error, data) {
        //if there is an error, log it
        if (error) {
            console.log('Error occurred: ' + error);
        }

        else {
        	console.log(data);
        }


});

}
