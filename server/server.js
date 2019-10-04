const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const process = require('process');

const app = express();
var db = null;

var server = app.listen(5000, () => {
    var host = server.address().address
    var port = server.address().port

    fs.readFile("./file-db.json", "utf8", (err, data) => {
        if (err) {
            console.error('failed to read file-db.json:', err);
            return;
        }

        db = JSON.parse(data);
    })
    console.log("Example app listening at http://%s:%s", host, port)
})

/*Concept Resource : https://velopert.com/267 */
process.stdin.resume();

process.on('SIGINT', function () {
    console.log("SIGINT-handler")
    //    fs.writeFile("./postdb.json", JSON.stringify(dball), function(err) {
    //       if (err) {
    //          console.log(err);
    //          res.status(500).send('Server Error');
    //       }
    //    console.log('The file has been saved!')
    process.exit();
    //    });
});
//  });

//!jw one time declaration and reuse
//>rz the line below is to give 'req' 'body attribute' and set encoding as UTF-8 automatically so that we can use req.body in simple way.
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//>rz the line below is to load all file that in the directory named 'public' which includes express.
app.use(express.static('public'));


//======= 1. api section
app.get('/main', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('{"key":1}');
})

app.get('/boardList', (req, res) => {
    res.send(db.boardList);
})

app.get('/getBoard/:boardid', (req, res) => {
    var boardid = req.params.boardid;

    boardid = sliceStrId(boardid);

    // console.log(db.boards[id]);
    res.send(db.boards[boardid]);
})

app.get('/getBoard/:boardid/post/:postid', (req, res) => {
    var boardid = req.params.boardid;
    var postid = req.params.postid;

    boardid = sliceStrId(boardid);
    postid = sliceStrId(postid);

    console.log(db.boards[boardid].posts[postid]);
    res.send(db.boards[boardid].posts[postid])
})

// str slicing    example) b01 -> 1, b11 -> 11
var sliceStrId = (id) => {
    id = id.substring(1, 3);
    id[0] === '0' ? (id = id[1]) : (id);
    return id;
}

// app.get('/writepost/:boardid', function (req, res) {
//     res.sendFile(__dirname + "../front-end/writepost.html");
//  })

// app.post('/postList', urlencodedParser, function (req, res) {
//     console.log('Writing new data');
//     var i = dball.posts.length - 1
//     pushArray =
//         {
//             "postId": db.board,
//             "postTitle": req.body.post_title,
//             "postDate": req.body.post_date,
//             "postIp": req.body.post_ip,
//             "postContents": req.body.post_contents,
//             "postWriter": req.body.post_title
//         }
// 
// dball.posts.push(pushArray);
// res.send('Sucessfully Uploaded');
//  })