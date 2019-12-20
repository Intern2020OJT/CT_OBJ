/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable no-await-in-loop */
/* eslint-disable indent */
const ctrlAllDataIntros = require("./ctrl_allDataIntros");
const ctrlIssuesDataIntros = require("./ctrl_issuesDataIntros");

exports.deleteData = async (req) => {
    var introsData = [];
    const getInfo = req.body;
    const midInfo = Object.keys(getInfo);
    const getNameAndUrl = JSON.parse(midInfo);
    for (let num = 0; num < getNameAndUrl.length; num++) {
        const lastUrl = getNameAndUrl[num].html_url.split("/");
        const recieveRepo = lastUrl[4];// 仓库名
        let midData = {
            name: recieveRepo,
        };
        introsData.push(midData);
        await ctrlAllDataIntros.deleteIntrosDataDB(introsData);
        await ctrlIssuesDataIntros.deleteIntrosDataDB(introsData);
        introsData = [];
    }
    return "_DELETE_OK";
};
