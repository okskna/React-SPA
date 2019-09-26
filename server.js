const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/articles', (req, res) => {
res.send(
    {
        "board1": [{
            "key": "1",
            "title": "JSON test A-1",
            "date": "09/17/19",
            "ip": "0.0.0.1",
            "contents": "This is test page. Lorem rorem lorem. A Suspendisse feugiat eget nulla interdum malesuada. Sed laoreet eget nulla vitae pharetra. Integer commodo mattis dictum.",
            "writer": "김선관"
        },
        {
            "key": "2",
            "title": "JSON test A-2",
            "date": "09/18/19",
            "ip": "0.0.0.2",
            "contents": "test2 contents.",
            "writer": "김선관2"
        },
        {
            "key": "3",
            "title": "JSON test A-3",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "test3 contents.",
            "writer": "김선관3"
        },
        {
            "key": "4",
            "title": "TEST A-4",
            "date": "09/18/19",
            "ip": "0.0.0.1",
            "contents": "ASDFASDFASDFADKSFASDFASDFASDFASDFASDFASDFASDFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관4"
        },
        {
            "key": "5",
            "title": "TEST 5",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관5"
        },
        {
            "key": "6",
            "title": "TEST 6",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관6"
        },
        {
            "key": "7",
            "title": "TEST 7",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF",
            "writer": "김선관7"
        }],
        "board2": [{
            "key": "1",
            "title": "JSON test B-1",
            "date": "09/17/19",
            "ip": "0.0.0.1",
            "contents": "This is test page. Lorem rorem lorem. A Suspendisse feugiat eget nulla interdum malesuada. Sed laoreet eget nulla vitae pharetra. Integer commodo mattis dictum.",
            "writer": "김선관"
        },
        {
            "key": "2",
            "title": "JSON test B-2",
            "date": "09/18/19",
            "ip": "0.0.0.2",
            "contents": "test2 contents.",
            "writer": "김선관2"
        },
        {
            "key": "3",
            "title": "JSON test B-3",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "test3 contents.",
            "writer": "김선관3"
        },
        {
            "key": "4",
            "title": "TEST 4",
            "date": "09/18/19",
            "ip": "0.0.0.1",
            "contents": "ASDFASDFASDFADKSFASDFASDFASDFASDFASDFASDFASDFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관4"
        },
        {
            "key": "5",
            "title": "TEST 5",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관5"
        },
        {
            "key": "6",
            "title": "TEST 6",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관6"
        },
        {
            "key": "7",
            "title": "TEST 7",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF",
            "writer": "김선관7"
        }],
        "board3": [{
            "key": "1",
            "title": "JSON test C-1",
            "date": "09/17/19",
            "ip": "0.0.0.1",
            "contents": "This is test page. Lorem rorem lorem. A Suspendisse feugiat eget nulla interdum malesuada. Sed laoreet eget nulla vitae pharetra. Integer commodo mattis dictum.",
            "writer": "김선관"
        },
        {
            "key": "2",
            "title": "JSON test C-2",
            "date": "09/18/19",
            "ip": "0.0.0.2",
            "contents": "test2 contents.",
            "writer": "김선관2"
        },
        {
            "key": "3",
            "title": "JSON test C-3",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "test3 contents.",
            "writer": "김선관3"
        },
        {
            "key": "4",
            "title": "TEST 4",
            "date": "09/18/19",
            "ip": "0.0.0.1",
            "contents": "ASDFASDFASDFADKSFASDFASDFASDFASDFASDFASDFASDFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관4"
        },
        {
            "key": "5",
            "title": "TEST 5",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관5"
        },
        {
            "key": "6",
            "title": "TEST 6",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관6"
        },
        {
            "key": "7",
            "title": "TEST 7",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF",
            "writer": "김선관7"
        }],
        "board4": [{
            "key": "1",
            "title": "JSON test D-1",
            "date": "09/17/19",
            "ip": "0.0.0.1",
            "contents": "This is test page. Lorem rorem lorem. A Suspendisse feugiat eget nulla interdum malesuada. Sed laoreet eget nulla vitae pharetra. Integer commodo mattis dictum.",
            "writer": "김선관"
        },
        {
            "key": "2",
            "title": "JSON test D-2",
            "date": "09/18/19",
            "ip": "0.0.0.2",
            "contents": "test2 contents.",
            "writer": "김선관2"
        },
        {
            "key": "3",
            "title": "JSON test D-3",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "test3 contents.",
            "writer": "김선관3"
        },
        {
            "key": "4",
            "title": "TEST 4",
            "date": "09/18/19",
            "ip": "0.0.0.1",
            "contents": "ASDFASDFASDFADKSFASDFASDFASDFASDFASDFASDFASDFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관4"
        },
        {
            "key": "5",
            "title": "TEST 5",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관5"
        },
        {
            "key": "6",
            "title": "TEST 6",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFF.",
            "writer": "김선관6"
        },
        {
            "key": "7",
            "title": "TEST 7",
            "date": "09/18/19",
            "ip": "0.0.0.3",
            "contents": "SADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFFSADFDSFASDFASDFDSDFDSFASDFSDFASDFF",
            "writer": "김선관7"
        }]
    }
);
});

app.listen(port, () => console.log(`Listening on port ${port}`));