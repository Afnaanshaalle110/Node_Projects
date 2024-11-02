const { readTasksFromFile } = require("../utils/fileHandaler")

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200,{'content-type': 'application/json'})

}