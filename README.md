# Flashcard-Generator

## Overview

This application implements a basic flash card game where the user is prompted to create either a basic flashcard or a cloze flashcard. A basic flashcard consists of the simple question and answer, while a cloze flashcard displays a statement with part of the text hidden, and the player is supposed to guess the missing text to determine the answer.

The list of questions and answers created by the user is saved inside [log.txt](log.txt). 
The basic flash cards are constructed within [BasicCard.js](BasicCard.js) and the cloze flash cards are constructed within [ClozeCard.js](ClozeCard.js).

## Install

To install the application, first clone this repository:

	git clone https://github.com/jnnfrsofia/Flashcard-Generator.git
	
Then install the [inquirer](https://www.npmjs.com/package/inquirer) package for command line interaction.

	npm install inquirer

## Run

To run the game execute the following command:

	node flashcardApp.js
	
