const mysql = require('mysql')

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"sampledb"
})

con.connect(err =>{
    if(err) throw err
    console.log("Mysql is connected")
})


module.exports = con