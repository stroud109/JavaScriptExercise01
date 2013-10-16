var Cat = function(tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;

    this.sleep = function(numMinutes) {
        for (var i = 0; i < numMinutes; i++) {
            console.log('z');
            this.tiredness--;
        }
    };

    this.eat = function(numKibbles) {
        for (var i = 0; i < numKibbles; i++) {
            console.log('mm');
            this.hunger--;
        }
    };

    this.pet = function(numPets) {
        for (var i = 0; i < numPets; i++) {
            console.log('purrr');
            this.loneliness--;
            this.happiness++;
        }
    };

    this.leftAlone = function(numHours) {
        for (var i = 0; i < numHours; i++) {
            console.log(":(");
            this.loneliness++;
            this.happiness--;
        }
    };
};

var peamy = new Cat(100, 50, 20, 80);
peamy.sleep(5);
peamy.eat(10);
peamy.pet(40);
peamy.leftAlone(30);