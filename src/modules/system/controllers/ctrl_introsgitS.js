const log = require("../../../core/logger");

var fetch = require("axios");

const BASE_URL = 'https://api.github.com/repos/'


const introsDataFromGit = async (url, type) => {
    var url = BASE_URL + url;
    var method = type;
    var options = {
        method,
        url,
    };
    try {

        var response = await fetch(options);
        var introsData = response.data;
        //console.log(introsData);
        return introsData;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}
const introsDataFromGitIssues = async (url, type) => {
    var url = BASE_URL + url + '/issues';
    var method = type;
    var options = {
        method,
        url,
    };
    
    var saveDataFromIssues = [];
    try {
        const response =await fetch(options);
        var introsData = response.data;
        for (var i = 0; introsData[i] != undefined; i++) {
            var saveDataFromIssue = {
                "state": null,
                "created_at": null,
                "closed_at": null
            }//循环外不知为何会产生覆盖
            saveDataFromIssue.state = introsData[i].state
            saveDataFromIssue.created_at = introsData[i].created_at
            saveDataFromIssue.closed_at = introsData[i].closed_at
            saveDataFromIssues.push(saveDataFromIssue)
        }
        console.log("saveDataFromIssues"+saveDataFromIssues);
        return saveDataFromIssues;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}
const introsDataFromGitLabels =async (url, type) => {
    var url = BASE_URL + url + '/labels';
    var method = type;
    var options = {
        method,
        url,
    };
    var saveDataFromLabel = {
        "name": null
    }
    var saveDataFromLabels = [];
    try {
        const response =await fetch(options);
        var introsData = response.data;
        for (var i = 0; introsData[i] != undefined; i++) {
            var saveDataFromLabel = {
                "name": introsData[i].name
            }
            //saveDataFromLabels[i].name = introsData[i].name
            //saveDataFromLabels.push();
            saveDataFromLabels.push(saveDataFromLabel)
        }
        console.log("saveDataFromLabels:"+saveDataFromLabels);
        return saveDataFromLabels;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}



exports.introsGits = async (req) => {
    var params = req.url.split("/");
    lastUrl = params;
    var userName = lastUrl[5];//用户名
    var recieveRepo = lastUrl[6];//仓库名
    var pullUrl = userName + '/' + recieveRepo;//防止链接深入，只取用户与仓库
    var saveDataFromIssuesData = {
        "name": null,
        "issues": null,
        "openissues":null,
        "watchers":null,  
    }
    var saveDataFromIssues = [];

    try {
        var midUrl = pullUrl;
        console.log(midUrl)

        var midData =await introsDataFromGit(midUrl, 'get');
        saveDataFromIssues =await introsDataFromGitIssues(midUrl, 'get');
        saveDataFromIssuesData.issues = saveDataFromIssues;
        saveDataFromIssuesData.name = midData.name;
        saveDataFromIssuesData.openissues=midData.open_issues;
        saveDataFromIssuesData.watchers=midData.watchers;
        
        return saveDataFromIssuesData
        //return saveDataFromLabels
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}