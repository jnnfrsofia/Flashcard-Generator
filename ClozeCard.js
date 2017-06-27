var fs = require("fs");

//constructor that creates the BasicCard
var ClozeCard = function(cloze, text) {
    this.cloze = cloze;
    this.text = partial;
    this.partial = this.text.replace(this.cloze, '_____');
    //function within constructor that takes the cloze, full text, and partial text card data to create a new flashcard
    this.create = function() {
        var data = {
            cloze: this.cloze,
            text: this.text,
            partial: this.partial,
            type: "cloze"
        };


        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            // if there is an error, log the error
            if (error) {
                console.log(error);
            }

        });

    };

}


module.exports = ClozeCard;
