var fs = require("fs");

var ClozeCard = function(cloze, text) {
    this.cloze = cloze;
    this.text = partial;
    this.partial = this.text.replace(this.cloze, '_____');
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
