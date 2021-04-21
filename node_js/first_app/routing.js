const fs = require('fs')
const url = require('url')

function handelrequest(filepath, res) {
    fs.readFile(filepath, null, (error, data) => {
        if (error) {
            res.end('File Have Error')
        } else {
            res.end(data)
        }
    });
}

function routing(req, res) {
    const path = url.parse(req.url).pathname
    switch (path) {
        case '/':
            handelrequest('index.html', res)
            break;
        case '/test':
            handelrequest('test.html', res)
            break;
        default:
            res.end('this page not found')
            break;
    }
}

module.exports = routing;