const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const connection = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ksulli0523',
    database: 'Pets'
});


const app = express();

connection.getConnection()
    .then(conn => {
    
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          //Table must have been created before 
          // " CREATE TABLE myTable (id int, val varchar(255)) "
          return conn.query("SELECT * FROM Users");
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

app.listen(9000, () => {
    console.log('Go to https://localhost:9000/ users so you can see the data');
});