var fs = require("fs");

//constructor that creates the BasicCard
var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    //function within constructor that takes the front and back card data to create a new flashcard
    this.create = function() {
        var data = {
            front: this.front,
            back: this.back,
            type: "basic",
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

module.exports = BasicCard;
