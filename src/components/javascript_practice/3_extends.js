class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }

    greet() {
        console.log("Welcome Back," + this.name);
    }

    status() {
        console.log('Current status ' + this.type);
    }
}

class TrialUser extends User  {
    trialEnding() {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you  like to join our program?');
    }
}

var anonDude = new User ("Anonymous");
anonDude.greet();
anonDude.status();

var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
    banned() {
        console.log('Sadly ' + this.name + ', you have been bannded for use of bad language.')
    }
}

var banndedUser = new BannedUser("David");
banndedUser.banned();
