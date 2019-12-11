const log = require("../../../core/logger");
exports.introsGit = async (req) => {
    log.info("introsGit");

    try {
        var request = require('request');
        request('https://api.github.com/repos/Intern2020OJT/CT_OBJ', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                req=body;
                console.log(body);
                console.log(response)
                return (req);
            }
        })
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}