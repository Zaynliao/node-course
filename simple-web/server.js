const http = request('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200;

    response.end('hello server');
});

server.listen(3001, () => {
    console.log('server running at port 3001');
});
