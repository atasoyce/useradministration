const mysql = require('mysql2/promise');


const database = mysql.createPool({
    host: 'localhost',
    database: 'demo',
    user: 'root',
    password: 'newpassword',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function login(name, password){
    try{
        let query = await database.query(`select name, password from user where name="${name}" and password="${password}"`);
        let result = query[0];

        if (result.length == 1){
            return true;
        }
        else{
            return false;
        }
    }
    catch (error){
        await Promise.reject("Es ist ein Fehler aufgetreten:" + error)
    }
};


async function register (name, password) {
    try{
        let query = await database.query(`select name, password from user where name="${name}" and password="${password}"`);
        let result = query[0];

        if (result.length > 0){
            return false;
        }
        else{
            let query = await database.query(`insert into user(name, password) values ('${name}', '${password}')`);
            return true;
        }
    }
    catch (error){
        await Promise.reject("Es ist ein Fehler aufgetreten:" + error)
    }
};


exports.login = login;
exports.register = register;

