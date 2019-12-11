const log = require("../../../core/logger");
const Url = require('url');

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

        const response = await fetch(options);
        var introsData = response.data;
        console.log(introsData);
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
    var saveDataFromIssue = {
        "title": null,
        "html_url": null,
        "labels": null,
        "state": null,
        "assignees": null,
        "comments": null,
        "created_at": null,
        "closed_at": null
    }
    var saveDataFromIssues = [];
    try {
        const response =await fetch(options);
        var introsData = response.data;
        for (var i = 0; introsData[i] != undefined; i++) {
            saveDataFromIssue.assignees = introsData[i].assignees
            saveDataFromIssue.title = introsData[i].title
            saveDataFromIssue.html_url = introsData[i].html_url
            saveDataFromIssue.labels = introsData[i].labels
            saveDataFromIssue.state = introsData[i].state
            saveDataFromIssue.comments = introsData[i].comments
            saveDataFromIssue.created_at = introsData[i].created_at
            saveDataFromIssue.closed_at = introsData[i].closed_at
            saveDataFromIssues.push(saveDataFromIssue)
        }
        console.log(saveDataFromIssues);
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
            saveDataFromLabel.name = introsData[i].name
            saveDataFromLabels.push(saveDataFromLabel)
        }
        console.log(saveDataFromLabels);
        return saveDataFromLabels;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}



exports.introsGit = async (req) => {
    //var params = url.parse(req.url, true).query;
    var params = req.url.split("/");
    console.log(params)
    lastUrl = params;
    console.log(lastUrl)
    var userName = lastUrl[5];//用户名
    var recieveRepo = lastUrl[6];//仓库名
    var pullUrl = userName + '/' + recieveRepo;//防止链接深入，只取用户与仓库
    var saveDataFromLabelsAndIssues = {
        "name": null,
        "labels": null,
        "issues": null,
    }
    var saveDataFromLabels = [];//项目所有labels
    var saveDataFromIssues = [];

    try {
        var midUrl = pullUrl;
        console.log(midUrl)

        var midData = introsDataFromGit(midUrl, 'get');
        saveDataFromLabels = introsDataFromGitLabels(midUrl, 'get');
        saveDataFromIssues = introsDataFromGitIssues(midUrl, 'get');
        saveDataFromLabelsAndIssues.name = midData.name;
        saveDataFromLabelsAndIssues.issues = saveDataFromIssues;
        saveDataFromLabelsAndIssues.labels = saveDataFromLabels;
        return saveDataFromLabelsAndIssues
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}