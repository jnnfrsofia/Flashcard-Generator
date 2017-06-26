var fs = require("fs");

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
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
