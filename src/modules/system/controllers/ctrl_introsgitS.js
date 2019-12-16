const log = require("../../../core/logger");
var CreateIntrosDataDB = require("./ctrl_allDataIntros")

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
const introsDataFromGitIssues = async (Url, type) => {

    var saveDataFromIssues = [];
    try {
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=open';//默认只有open，故需二次并指定
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
                        "state": null,
                        "created_at": null,
                        "closed_at": null,
                    }//循环外不知为何会产生覆盖
                    saveDataFromIssue.state = introsData[i].state
                    saveDataFromIssue.created_at = introsData[i].created_at
                    saveDataFromIssue.closed_at = introsData[i].closed_at
                    saveDataFromIssues.push(saveDataFromIssue)
                }
            }
            url = '';
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
                        "state": null,
                        "created_at": null,
                        "closed_at": null,
                    }//循环外不知为何会产生覆盖
                    saveDataFromIssue.state = introsData[i].state
                    saveDataFromIssue.created_at = introsData[i].created_at
                    saveDataFromIssue.closed_at = introsData[i].closed_at
                    saveDataFromIssues.push(saveDataFromIssue)
                }
            }
            url = '';
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
exports.introsGits = async (req) => {
    var params = req.url.split("/");
    lastUrl = params;
    var userName = lastUrl[5];//用户名
    var recieveRepo = lastUrl[6];//仓库名
    try {
        if (lastUrl[5] === undefined || lastUrl[6] === undefined || lastUrl[5] === '' || lastUrl[6] === '')
            throw Error//防止错误，或需再添超时报错
        else {
            var pullUrl = userName + '/' + recieveRepo;//防止链接深入，只取用户与仓库
            var saveDataFromIssuesData = {
                "name": null,
                "issues": null,
                "openissues": null,
                "watchers": null,
            }
            var saveDataFromIssues = [];
            var midUrl = pullUrl;
            var saveDatafromIntros = []
            var midData 
            console.log(midUrl)

            midData = await introsDataFromGit(midUrl, 'get');
            //saveDataFromIssues = await introsDataFromGitIssues(midUrl, 'get');
            //saveDataFromIssuesData.issues = saveDataFromIssues;
            //saveDataFromIssuesData.name = midData.name;
            //saveDataFromIssuesData.openissues = midData.open_issues;
            //saveDataFromIssuesData.watchers = midData.watchers;
            saveDatafromIntros.push(midData)
            await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
            return saveDataFromIssuesData;
            //return saveDataFromLabels
        }
    }
    catch (err) {
        return '_IS_faile'
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}