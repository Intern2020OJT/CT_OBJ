const log = require("../../../core/logger");

var fetch = require("axios");

const BASE_URL = 'https://api.github.com/repos/'


const introsDataFromGit = async (url, type) => {
    try {
        var url = BASE_URL + url;
        var method = type;
        var options = {
            method,
            url,
        };
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
const introsDataFromGitIssues = async (Url, type) => {

    try {
        var response
        var pageNum = 1
        var saveDataFromIssues = [];
        var method = type;
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=open';
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== []) {
                var introsData = response.data;
                for (var i = 0; introsData[i] != undefined; i++) {
                    var saveDataFromIssue = {
                        "title": null,
                        "html_url": null,
                        "labels": null,
                        "state": null,
                        "assignees": null,
                        "comments": null,
                        "created_at": null,
                        "closed_at": null
                    }//循环外不知为何会产生覆盖
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
            }
            url='';//奇怪
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== [])
        
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=closed';//默认只有open，故需二次并指定
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== []) {
                var introsData = response.data;
                for (var i = 0; introsData[i] != undefined; i++) {
                    var saveDataFromIssue = {
                        "title": null,
                        "html_url": null,
                        "labels": null,
                        "state": null,
                        "assignees": null,
                        "comments": null,
                        "created_at": null,
                        "closed_at": null
                    }//循环外不知为何会产生覆盖
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
            }
            url='';
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== [])
        return saveDataFromIssues;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}
const introsDataFromGitLabels = async (url, type) => {
    var url = BASE_URL + url + '/labels';
    var method = type;
    var options = {
        method,
        url,
    };
    //var saveDataFromLabels = [];
    try {
        const response = await fetch(options);
        var introsData = response.data;
        /*for (var i = 0; introsData[i] != undefined; i++) {
            var saveDataFromLabel
            saveDataFromLabels[i].name = introsData[i].name
            saveDataFromLabels.push();
            saveDataFromLabels.push(saveDataFromLabel)
        }
        console.log("saveDataFromLabels:" + saveDataFromLabels);*/
        return introsData;
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}
const introsDataFromGitLan = async (url, type) => {
    var url = BASE_URL + url + '/languages';
    var method = type;
    var options = {
        method,
        url,
    };
    try {
        const response = await fetch(options);
        return response.data;
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
    // console.log(params)
    lastUrl = params;
    // console.log(lastUrl)
    var userName = lastUrl[5];//用户名
    var recieveRepo = lastUrl[6];//仓库名 //或需进行防错处理
    var pullUrl = userName + '/' + recieveRepo;//防止链接深入，只取用户与仓库
    var saveDataFromLabelsAndIssues = {
        "name": null,
        "labels": null,
        "issues": null,
        "languages": null
    }
    var saveDataFromLabels = [];//项目所有labels
    var saveDataFromIssues = [];
    var saveDataFromLan;

    try {
        var midUrl = pullUrl;
        console.log(midUrl)

        var midData = await introsDataFromGit(midUrl, 'get');
        saveDataFromLabels = await introsDataFromGitLabels(midUrl, 'get');
        saveDataFromIssues = await introsDataFromGitIssues(midUrl, 'get');
        saveDataFromLan = await introsDataFromGitLan(midUrl, 'get');
        saveDataFromLabelsAndIssues.issues = saveDataFromIssues;
        saveDataFromLabelsAndIssues.labels = saveDataFromLabels;
        saveDataFromLabelsAndIssues.name = midData.name;
        saveDataFromLabelsAndIssues.languages = saveDataFromLan;

        return saveDataFromLabelsAndIssues
        //return saveDataFromLabels
    }
    catch (err) {
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}