const databaseManager = require('./databaseManager');

function start(req, res){
    res.render('index');
}

async function login(req, res){
    try{
        let result = "";
        let endergebnis = "";
        let notification = "";
        let inputUsername = req.query.name;
        let inputPassword = req.query.password;
        let credentialsCorrect = await databaseManager.login(inputUsername, inputPassword);


        if (credentialsCorrect){
            notification += '<h4>' + "Willkommen, " + inputUsername + '</h4>';
            result += notification;
        } else {
            notification += '<h4>Username oder Passwort nicht korrekt</h4>';
            result += notification;
        }

        endergebnis = result;
        res.send(endergebnis);
    }
    catch (error){
        console.log("Es ist ein Fehler aufgetreten:" + error);
    }
}


async function register(req, res){
    try{
        let result = "";
        let endergebnis = "";
        let notification = "";
        let inputUsername = req.query.name;
        let inputPassword = req.query.password;
        let credentialsCorrect = await databaseManager.register(inputUsername, inputPassword);


        if (credentialsCorrect == false){
            notification += '<h4>User existiert bereits!</h4>';
            result += notification;
        } else {
            notification += '<h4>Erfolgreich registriert</h4>';
            result += notification;
        }

        endergebnis = result;
        res.send(endergebnis);
    }
    catch (error){
        console.log("Es ist ein Fehler aufgetreten:" + error);
    }
}

exports.start = start;
exports.login = login;
exports.register = register;
