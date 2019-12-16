const log = require("../../../core/logger");
var CreateIntrosDataDB = require("./ctrl_allDataIntros")
var CreateIssuesIntrosDataDB = require("./ctrl_issuesDataIntros");

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
    var pageNum=1
    var method=type
    try {
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=open&access_token=OAUTH-TOKEN';//默认只有open，故需二次并指定
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== 0) {
                var introsDataOpen = response.data;
                /*for (var i = 0; introsData[i] != undefined; i++) {
                    var saveDataFromIssue = {
                        "state": null,
                        "created_at": null,
                        "closed_at": null,
                    }//循环外不知为何会产生覆盖
                    saveDataFromIssue.state = introsData[i].state
                    saveDataFromIssue.created_at = introsData[i].created_at
                    saveDataFromIssue.closed_at = introsData[i].closed_at
                    saveDataFromIssues.push(saveDataFromIssue)
                }*/
            }
            url = '';
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== 0)
        pageNum=1
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=closed';//默认只有open，故需二次并指定
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== 0) {
                var introsDataClosed = response.data;
                /*for (var i = 0; introsData[i] != undefined; i++) {
                    var saveDataFromIssue = {
                        "state": null,
                        "created_at": null,
                        "closed_at": null,
                    }//循环外不知为何会产生覆盖
                    saveDataFromIssue.state = introsData[i].state
                    saveDataFromIssue.created_at = introsData[i].created_at
                    saveDataFromIssue.closed_at = introsData[i].closed_at
                    saveDataFromIssues.push(saveDataFromIssue)
                }*/
            }
            url = '';
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== 0)
        for(var i=0;i<introsDataOpen.length;i++)
        saveDataFromIssues.push(introsDataOpen[i]);
        for(var j=0;j<introsDataClosed.length;j++)
        saveDataFromIssues.push(introsDataClosed[j]);
        
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
            var saveDataFromGit 
            var saveDataFromLabels
            var saveDataFromIssues
            var saveDataFromLan
            var MYNeedData
            console.log(midUrl)

            saveDataFromGit = await introsDataFromGit(midUrl, 'get');
            saveDataFromLabels = await introsDataFromGitLabels(midUrl, 'get');
            saveDataFromIssues = await introsDataFromGitIssues(midUrl, 'get');
            saveDataFromLan = await introsDataFromGitLan(midUrl, 'get');
            saveDataFromGit.labels=saveDataFromLabels;
            saveDataFromGit.language=saveDataFromLan;
            saveDatafromIntros.push(saveDataFromGit)
            for(var i=0;i<saveDataFromIssues.length;i++)
            {
                saveDataFromIssues[i].name=saveDataFromGit.name
                saveDataFromIssues[i].full_name=saveDataFromGit.full_name
            }
            MYNeedData.name=saveDataFromGit.name
            MYNeedData.full_name=saveDataFromGit.full_name
            MYNeedData.lan=saveDataFromLan
            
            
            await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
            await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);//建立双表，一表总体，一表issues
            return MYNeedData;
            //return saveDataFromIssues
        }
    }
    catch (err) {
        return '_IS_faile'
        log.info("getAssignees err")
        log.err(err)
        throw err
    }
}