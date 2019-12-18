const log = require("../../../core/logger");
var CreateIntrosDataDB = require("./ctrl_allDataIntros")
var CreateIssuesIntrosDataDB = require("./ctrl_issuesDataIntros");
var HomegetDBData = require("./ctrl_HomegetDBData");
const fs = require('fs');

var fetch = require("axios");


const BASE_URL = 'https://api.github.com/repos/'


const introsDataFromGit = async (url, type) => {
    var url = BASE_URL + url + '?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815';
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
    var pageNum = 1
    var method = type
    var introsDataOpen = [];
    var introsDataClosed = []
    try {
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=open&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815';//默认只有open，故需二次并指定
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== 0) {
                for (var i = 0; i < response.data.length; i++)
                    introsDataOpen.push(response.data[i]);


            }
            url = '';
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== 0)
        pageNum = 1
        do {
            var url = BASE_URL + Url + '/issues' + '?page=' + pageNum + '&per_page=100&state=closed&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815';//默认只有open，故需二次并指定
            pageNum++
            var options = {
                method,
                url,
            };
            var response = await fetch(options);
            if (response.data.length !== 0) {
                for (var i = 0; i < response.data.length; i++)
                    introsDataClosed.push(response.data[i]);
            }
            url = '';
            //console.log("saveDataFromIssues" + saveDataFromIssues);
        }
        while (response.data.length !== 0)
        for (var i = 0; i < introsDataOpen.length; i++)
            saveDataFromIssues.push(introsDataOpen[i]);
        for (var j = 0; j < introsDataClosed.length; j++)
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
    var url = BASE_URL + url + '/labels?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815';
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
    var url = BASE_URL + url + '/languages?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815';
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
    var params = req.url.split("?")[1];
    var lastUrl = params.split("/")
    if (lastUrl[0] !== 'https:' && lastUrl[0] === 'github.com') {
        var userName = lastUrl[1];//用户名
        var recieveRepo = lastUrl[2];//仓库名
        try {
            if (lastUrl[1] === undefined || lastUrl[2] === undefined || lastUrl[1] === '' || lastUrl[2] === '')
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
                saveDataFromGit.labels = saveDataFromLabels;
                saveDataFromGit.language = saveDataFromLan;
                saveDatafromIntros.push(saveDataFromGit)
                for (var i = 0; i < saveDataFromIssues.length; i++) {
                    saveDataFromIssues[i].name = saveDataFromGit.name
                    saveDataFromIssues[i].full_name = saveDataFromGit.full_name
                }
                MYNeedData = {
                    "name": saveDataFromGit.name,
                    "full_name": saveDataFromGit.full_name,
                    "lan": saveDataFromLan
                }


                //防止添加重复
                var contentED = await HomegetDBData.HomegetDBDataForCheck(MYNeedData.name)
                
                if (contentED===0) {
                    await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
                    await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);//建立双表，一表总体，一表issues
                }//返回长度为0，无重复
                else {

                }

                return MYNeedData;

                //return saveDatafromIntros

            }
        }
        catch (err) {
            return '_IS_faile'
            log.info("getAssignees err")
            log.err(err)
            throw err
        }
    }
    else if (lastUrl[0] === 'https:') {
        var userName = lastUrl[3];//用户名
        var recieveRepo = lastUrl[4];//仓库名
        try {
            if (lastUrl[3] === undefined || lastUrl[4] === undefined || lastUrl[3] === '' || lastUrl[4] === '')
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
                saveDataFromGit.labels = saveDataFromLabels;
                saveDataFromGit.language = saveDataFromLan;
                saveDatafromIntros.push(saveDataFromGit)
                for (var i = 0; i < saveDataFromIssues.length; i++) {
                    saveDataFromIssues[i].name = saveDataFromGit.name
                    saveDataFromIssues[i].full_name = saveDataFromGit.full_name
                }
                MYNeedData = {
                    "name": saveDataFromGit.name,
                    "full_name": saveDataFromGit.full_name,
                    "lan": saveDataFromLan
                }
                //await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
                //await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);//建立双表，一表总体，一表issues
                //return MYNeedData;
                //防止添加重复
                var contentED = await HomegetDBData.HomegetDBDataForCheck(MYNeedData.name)
                
                if (contentED===0) {
                    await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
                    await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);//建立双表，一表总体，一表issues
                }//返回长度为0，无重复
                else {
                    await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
                    await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);
                }

                return MYNeedData;
                //return saveDatafromIntros

            }
        }
        catch (err) {
            return '_IS_faile'
            log.info("getAssignees err")
            log.err(err)
            throw err
        }
    }//链接多样式预防
    else {
        try {
            throw err
        }
        catch (err) {
            return '_IS_faile'
            log.info("getAssignees err")
            log.err(err)
            throw err
        }
    }

}