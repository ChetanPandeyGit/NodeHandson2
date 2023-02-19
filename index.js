const express = require("express");
const server = express();
const port =  3001;

server.get('/', (req, res) => {
    res.end("<h1>Welcome to Express Routing</h1>")
})
server.get('/api/main', (req,res) => {
    console.log(req);
    const ques = 'What is Express?'
    const ans = "Express is a popular and widely-used web framework for Node.js, designed for building web applications and APIs. It provides a set of tools and features to make it easier to handle HTTP requests and responses, define routes, manage middleware, and more. Express is built on top of Node.js's built-in http module and provides a more streamlined and user-friendly API for building web applications."
    res.send([ques, ans])
    res.end()
})

server.listen(port, () => {
    console.log('Application Started at port 3001');
})