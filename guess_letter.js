var actualWord = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
var guessedWord = [];

function guessLetter() {
    while (actualWord != guessedWord) {
        console.log("Guess a letter");
            var reply = window.prompt();
        for (var i = 0; i <actualWord.length; i++) {
            if (reply == actualWord[i]) {
                guessedWord.push[reply];
                console.log(guessedWord);
            }
        }
    console.log("Congrats, you guessed the word.  The word was" + guessedWord)
    }
}

guessLetter();