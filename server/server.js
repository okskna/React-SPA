const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.get('/api/articles', (req, res) => {
    var article = new Object;
    var myPromiseArray = new Array;

    for (let i = 1; i < 5; ++i) {
        myPromiseArray.push(new Promise((resolve, reject)=>{
            let target = 'BOARD' + i;
            let path = 'board' + i;
            let sql = 'SELECT * from ' + target;
            console.log(sql);
            connection.query(
                sql,
                (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error.');
                    }
                    // console.log(rows);
                    article[path] = rows;
                    resolve(path + "success");
                    // res.send(rows);
                }
            )
        }));
    }
    console.log(myPromiseArray);
    Promise.all(myPromiseArray)
    .then((messages) => {
        console.log(messages);
        res.send(article);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// var xhr = XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === xhr.DONE) {
//         if (xhr.status === 200 || xhr.status === 201) {
//             console.log(xhr.responsetText);
//         } else {
//             console.error(xhr.responseText);
//         }
//     }
// };

// xhr.open('GET', 'https')