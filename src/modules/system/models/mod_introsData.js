const mongoose = require("mongoose");

const Model = require("../../../core/model");
const constant = require("../../../core/constant");

const { DB_NAME_ISSUE, SCHEMA_INTROSDATA } = constant;

const { Schema } = mongoose;
const { Mixed } = Schema.Types;



const Token = new Schema({
    id:                     { type: String, description: "id" },
    node_id:                { type: Mixed, description: "node_id" },
    name:                   { type: String, description: "name" },
    full_name:              { type: String, description: "full_name" },
    private:                { type: String, description: "private" },
    html_url:               { type: String, description: "html_url" },
    description:            { type: String, description: "description" },
    fork:                   { type: String, description: "fork" },
    url:                    { type: String, description: "url" },
    created_at:             { type: Mixed, description: "created_at" },
    upMixedd_at:            { type: Mixed, description: "upMixedd_at" },
    pushed_at:              { type: Mixed, description: "pushed_at" },
    size:                   { type: Mixed, description: "size" },
    stargazers_count:       { type: Mixed, description: "stargazers_count" },
    watchers_count:         { type: Mixed, description: "watchers_count" },
    language:               { type: Mixed, description: "language" },
    has_issues:             { type: Mixed, description: "has_issues" },
    has_projects:           { type: Mixed, description: "has_projects" },
    has_downloads:          { type: Mixed, description: "has_downloads" },
    has_wiki:               { type: Mixed, description: "has_wiki" },
    has_pages:              { type: Mixed, description: "has_pages" },
    forks_count:            { type: Mixed, description: "forks_count" },
    mirror_url:             { type: Mixed, description: "mirror_url" },
    archived:               { type: Mixed, description: "archived" },
    disabled:               { type: Mixed, description: "disabled" },
    open_issues_count:      { type: Mixed, description: "open_issues_count" },
    license:                { type: Mixed, description: "license" },
    forks:                  { type: Mixed, description: "forks" },
    open_issues:            { type: Mixed, description: "open_issues" },
    watchers:               { type: Mixed, description: "watchers" },
    default_branch:         { type: Mixed, description: "default_branch" },
    temp_clone_token:       { type: Mixed, description: "temp_clone_token" },
    network_count:          { type: Mixed, description: "network_count" },
    subscribers_count:      { type: Mixed, description: "subscribers_count" },
    organization:           { type: Mixed, description: "organization" },
    labels:                 { type: Mixed, description: "labels" },
    issues:                 { type: Mixed, description: "issues" },
    language:               { type: Mixed, description: "language" },
});

const ModelIntros = new Model(DB_NAME_ISSUE, SCHEMA_INTROSDATA, Token);

module.exports = ModelIntros;
