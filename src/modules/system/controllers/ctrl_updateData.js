/* eslint-disable padded-blocks */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
const CreateIntrosDataDB = require("./ctrl_allDataIntros");
const CreateIssuesIntrosDataDB = require("./ctrl_issuesDataIntros");
const ctrlIntrosGitS = require("./ctrl_introsgitS");

const fetch = require("axios");

exports.updateData = async (req) => {
    const getInfo = req.body;
    let midInfo = Object.keys(getInfo);
    let getNameAndUrl = JSON.parse(midInfo);
    try {
        for (let num = 0; num < getNameAndUrl.length; num++) {
            const lastUrl = getNameAndUrl[num].html_url.split("/");
            const userName = lastUrl[3];// 用户名
            const recieveRepo = lastUrl[4];// 仓库名
            const pullUrl = `${userName}/${recieveRepo}`;// 防止链接深入，只取用户与仓库
            let saveDataFromIssues = [];
            const midUrl = pullUrl;
            const saveDatafromIntros = [];
            let saveDataFromGit;
            let saveDataFromLabels;
            let saveDataFromLan;
            let MYNeedData;

            saveDataFromGit = await ctrlIntrosGitS.introsDataFromGit(midUrl, 'get');
            saveDataFromLabels = await ctrlIntrosGitS.introsDataFromGitLabels(midUrl, 'get');
            saveDataFromIssues = await ctrlIntrosGitS.introsDataFromGitIssues(midUrl, 'get');
            saveDataFromLan = await ctrlIntrosGitS.introsDataFromGitLan(midUrl, 'get');
            saveDataFromGit.labels = saveDataFromLabels;
            saveDataFromGit.language = saveDataFromLan;
            saveDatafromIntros.push(saveDataFromGit);
            for (let i = 0; i < saveDataFromIssues.length; i++) {
                saveDataFromIssues[i].name = saveDataFromGit.name;
                saveDataFromIssues[i].full_name = saveDataFromGit.full_name;
            }

            await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
            await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);

        }
        return "_ADD_OK";
    } catch (err) {
        return '_IS_faile';
    }
};
