const http = require('http');

const HOSTNAME = 'localHost'
const PORT = 9000


const server = http.createServer((req, res) =>{
    if (req.url.startWith('/tasks')) {
        taskRoutes(req, res)
    } else {
        res.writeHead(404, 'not found', {'content-type':    'application/json '})
        res.end(json.stringify({
            message: 'sorry, you got lost!' 
        }))
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log('server running on port ${PORT}')
})


