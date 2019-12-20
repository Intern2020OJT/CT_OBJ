/* eslint-disable no-empty */
/* eslint-disable prefer-const */
/* eslint-disable brace-style */
/* eslint-disable no-undef */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */
/* eslint-disable import/order */
const log = require("../../../core/logger");
const CreateIntrosDataDB = require("./ctrl_allDataIntros");
const CreateIssuesIntrosDataDB = require("./ctrl_issuesDataIntros");
const HomegetDBData = require("./ctrl_HomegetDBData");

const fetch = require("axios");


const BASE_URL = 'https://api.github.com/repos/';


exports.introsDataFromGit = async (Url, type) => {
  // eslint-disable-next-line max-len
  const url = `${BASE_URL + Url}?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
  try {
    const response = await fetch(options);
    const introsData = response.data;
    return introsData;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
exports.introsDataFromGitIssues = async (Url, type) => {
  const saveDataFromIssues = [];
  // eslint-disable-next-line no-var
  var responseR;
  let pageNum = 1;
  const method = type;
  const introsDataOpen = [];
  const introsDataClosed = [];
  try {
    do {
      let url = `${BASE_URL + Url}/issues` + `?page=${pageNum}&per_page=100&state=open&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;// 默认只有open，故需二次并指定
      pageNum++;
      const options = {
        method,
        url,
      };
      responseR = await fetch(options);
      if (responseR.data.length !== 0) {
        for (let i = 0; i < responseR.data.length; i++) { introsDataOpen.push(responseR.data[i]); }
      }
      url = '';
    }
    while (responseR.data.length !== 0);
    pageNum = 1;
    do {
      let url = `${BASE_URL + Url}/issues` + `?page=${pageNum}&per_page=100&state=closed&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;// 默认只有open，故需二次并指定
      pageNum++;
      const options = {
        method,
        url,
      };
      responseR = await fetch(options);
      if (responseR.data.length !== 0) {
        for (let i = 0; i < responseR.data.length; i++) { introsDataClosed.push(responseR.data[i]); }
      }
      url = '';
    }
    while (responseR.data.length !== 0);
    for (let i = 0; i < introsDataOpen.length; i++) { saveDataFromIssues.push(introsDataOpen[i]); }
    for (let j = 0; j < introsDataClosed.length; j++) { saveDataFromIssues.push(introsDataClosed[j]); }

    return saveDataFromIssues;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
exports.introsDataFromGitLabels = async (Url, type) => {
  const url = `${BASE_URL + Url}/labels?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
    // let saveDataFromLabels = [];
  try {
    const response = await fetch(options);
    const introsData = response.data;
    return introsData;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
exports.introsDataFromGitLan = async (Url, type) => {
  const url = `${BASE_URL + Url}/languages?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
  try {
    const response = await fetch(options);
    return response.data;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
const introsDataFromGit = async (Url, type) => {
  // eslint-disable-next-line max-len
  const url = `${BASE_URL + Url}?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
  try {
    const response = await fetch(options);
    const introsData = response.data;
    return introsData;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
const introsDataFromGitIssues = async (Url, type) => {
  const saveDataFromIssues = [];
  // eslint-disable-next-line no-var
  var responseR;
  let pageNum = 1;
  const method = type;
  const introsDataOpen = [];
  const introsDataClosed = [];
  try {
    do {
      let url = `${BASE_URL + Url}/issues` + `?page=${pageNum}&per_page=100&state=open&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;// 默认只有open，故需二次并指定
      pageNum++;
      const options = {
        method,
        url,
      };
      responseR = await fetch(options);
      if (responseR.data.length !== 0) {
        for (let i = 0; i < responseR.data.length; i++) { introsDataOpen.push(responseR.data[i]); }
      }
      url = '';
    }
    while (responseR.data.length !== 0);
    pageNum = 1;
    do {
      let url = `${BASE_URL + Url}/issues` + `?page=${pageNum}&per_page=100&state=closed&client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;// 默认只有open，故需二次并指定
      pageNum++;
      const options = {
        method,
        url,
      };
      responseR = await fetch(options);
      if (responseR.data.length !== 0) {
        for (let i = 0; i < responseR.data.length; i++) { introsDataClosed.push(responseR.data[i]); }
      }
      url = '';
    }
    while (responseR.data.length !== 0);
    for (let i = 0; i < introsDataOpen.length; i++) { saveDataFromIssues.push(introsDataOpen[i]); }
    for (let j = 0; j < introsDataClosed.length; j++) { saveDataFromIssues.push(introsDataClosed[j]); }

    return saveDataFromIssues;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
const introsDataFromGitLabels = async (Url, type) => {
  const url = `${BASE_URL + Url}/labels?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
    // let saveDataFromLabels = [];
  try {
    const response = await fetch(options);
    const introsData = response.data;
    return introsData;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
const introsDataFromGitLan = async (Url, type) => {
  const url = `${BASE_URL + Url}/languages?client_id=9230c9a4e40cad3ec24f&client_secret=7cf2d4d28372ba9ed246d8eaca195169a261d815`;
  const method = type;
  const options = {
    method,
    url,
  };
  try {
    const response = await fetch(options);
    return response.data;
  } catch (err) {
    log.info("getAssignees err");
    log.err(err);
    throw err;
  }
};
exports.introsGits = async (req) => {
  const params = req.url.split("?")[1];
  const lastUrl = params.split("/");
  if (lastUrl[0] !== 'https:' && lastUrl[0] === 'github.com') {
    const userName = lastUrl[1];// 用户名
    const recieveRepo = lastUrl[2];// 仓库名
    try {
      if (lastUrl[1] === undefined || lastUrl[2] === undefined || lastUrl[1] === '' || lastUrl[2] === '') {
        throw Error;
      }// 防止错误，或需再添超时报错
      else {
        const pullUrl = `${userName}/${recieveRepo}`;// 防止链接深入，只取用户与仓库
        let saveDataFromIssues = [];
        const midUrl = pullUrl;
        const saveDatafromIntros = [];
        let saveDataFromGit;
        let saveDataFromLabels;
        let saveDataFromLan;
        let MYNeedData;

        saveDataFromGit = await introsDataFromGit(midUrl, 'get');
        saveDataFromLabels = await introsDataFromGitLabels(midUrl, 'get');
        saveDataFromIssues = await introsDataFromGitIssues(midUrl, 'get');
        saveDataFromLan = await introsDataFromGitLan(midUrl, 'get');
        saveDataFromGit.labels = saveDataFromLabels;
        saveDataFromGit.language = saveDataFromLan;
        saveDatafromIntros.push(saveDataFromGit);
        for (let i = 0; i < saveDataFromIssues.length; i++) {
          saveDataFromIssues[i].name = saveDataFromGit.name;
          saveDataFromIssues[i].full_name = saveDataFromGit.full_name;
        }
        MYNeedData = {
          name: saveDataFromGit.name,
          full_name: saveDataFromGit.full_name,
          lan: saveDataFromLan,
        };


        // 防止添加重复
        const contentED = await HomegetDBData.HomegetDBDataForCheck(MYNeedData.name);
        // 忘记查询issues表内数据了--已修正，contentED内置两长度，若皆为0则表明无重复，可新建，其一不为0则更新，issues采用先删后加的方式
        if (contentED.programNum.length === 0 && contentED.issuesNum.length === 0) {
          await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);// 建立双表，一表总体，一表issues
          return MYNeedData;
        }// 返回长度皆为为0，无重复
        else if (contentED.programNum.length === 0 && contentED.issuesNum.length !== 0) {
          await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);
          return MYNeedData;
        }// 总体表无而issues表有，是为错误，但有所预防，当作正常情况正常返回即可
        else {
          await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);
          return "_HAD_DATA";
        }// 余下情况都为总体表已有
        // return MYNeedData;
        // return saveDataFromGit

        // return saveDatafromIntros
      }
    } catch (err) {
      return '_IS_faile';
    }
  } else if (lastUrl[0] === 'https:') {
    const userName = lastUrl[3];// 用户名
    const recieveRepo = lastUrl[4];// 仓库名
    try {
      if (lastUrl[3] === undefined || lastUrl[4] === undefined || lastUrl[3] === '' || lastUrl[4] === '') { throw Error; }// 防止错误，或需再添超时报错
      else {
        const pullUrl = `${userName}/${recieveRepo}`;// 防止链接深入，只取用户与仓库
        let saveDataFromIssues = [];
        const midUrl = pullUrl;
        const saveDatafromIntros = [];
        let saveDataFromGit;
        let saveDataFromLabels;
        let saveDataFromLan;
        let MYNeedData;

        saveDataFromGit = await introsDataFromGit(midUrl, 'get');
        saveDataFromLabels = await introsDataFromGitLabels(midUrl, 'get');
        saveDataFromIssues = await introsDataFromGitIssues(midUrl, 'get');
        saveDataFromLan = await introsDataFromGitLan(midUrl, 'get');
        saveDataFromGit.labels = saveDataFromLabels;
        saveDataFromGit.language = saveDataFromLan;
        saveDatafromIntros.push(saveDataFromGit);
        for (let i = 0; i < saveDataFromIssues.length; i++) {
          saveDataFromIssues[i].name = saveDataFromGit.name;
          saveDataFromIssues[i].full_name = saveDataFromGit.full_name;
        }
        MYNeedData = {
          name: saveDataFromGit.name,
          full_name: saveDataFromGit.full_name,
          lan: saveDataFromLan,
          html_url:saveDataFromGit.html_url,
        };
        // 防止添加重复
        const contentED = await HomegetDBData.HomegetDBDataForCheck(MYNeedData.name);
        // 忘记查询issues表内数据了--已修正，contentED内置两长度，若皆为0则表明无重复，可新建，其一不为0则更新，issues采用先删后加的方式
        if (contentED.programNum.length === 0 && contentED.issuesNum.length === 0) {
          await CreateIntrosDataDB.CreateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.CreateIntrosDataDB(saveDataFromIssues);// 建立双表，一表总体，一表issues
          return MYNeedData;
        }// 返回长度皆为为0，无重复
        else if (contentED.programNum.length === 0 && contentED.issuesNum.length !== 0) {
          await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);
          return MYNeedData;
        }// 总体表无而issues表有，是为错误，但有所预防，当作正常情况正常返回即可
        else {
          await CreateIntrosDataDB.UpdateIntrosDataDB(saveDatafromIntros);
          await CreateIssuesIntrosDataDB.UpdateIntrosDataDB(saveDataFromIssues);
          return "_HAD_DATA";
        }// 余下情况都为总体表已有
        // return MYNeedData;
        // return saveDataFromGit
      }
    } catch (err) {
      return '_IS_faile';
    }
  }// 链接多样式预防
  else {
    try {
      throw err;
    } catch (err) {
      return '_IS_faile';
    }
  }
};
