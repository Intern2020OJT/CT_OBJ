const mongoose = require("mongoose");

const Model = require("../../../core/model");
const constant = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_INTROSDATAISSUES } = constant;

const { Schema } = mongoose;
const { Mixed } = Schema.Types;



const Token = new Schema({
    name:                   { type: Mixed, description: "name" },
    full_name:              { type: Mixed, description: "full_name" },
    html_url:               { type: Mixed, description: "html_url" },
    id:                     { type: Mixed, description: "id" },
    node_id:                { type: Mixed, description: "node_id" },
    number:                 { type: Mixed, description: "number" },
    title:                  { type: Mixed, description: "title" },
    user:                   { type: Mixed, description: "user" },
    labels:                 { type: Mixed, description: "labels" },
    state:                  { type: Mixed, description: "state" },
    locked:                 { type: Mixed, description: "locked" },
    assignee:               { type: Mixed, description: "assignee" },
    assignees:              { type: Mixed, description: "assignees" },
    milestone:              { type: Mixed, description: "milestone" },
    comments:               { type: Mixed, description: "comments" },
    created_at:             { type: Mixed, description: "created_at" },
    updated_at:             { type: Mixed, description: "updated_at" },
    closed_at:              { type: Mixed, description: "closed_at" },
    pull_request:           { type: Mixed, description: "pull_request" },
    body:                   { type: Mixed, description: "body" },
});

const ModelIntrosIssues = new Model(DB_NAME_ISSUE, SCHEMA_INTROSDATAISSUES, Token);

module.exports = ModelIntrosIssues;
