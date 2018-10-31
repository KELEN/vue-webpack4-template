'use strict'
const lifeCycleEvnet = process.env.npm_lifecycle_event;

let buildEnv = {
    BASE_URL: "'http://47.100.6.239:15080'",
    NODE_ENV: '"development"'
};

if (lifeCycleEvnet === 'build:test') {
    buildEnv = {
        BASE_URL: "'http://47.100.6.239:15080'",
        NODE_ENV: '"production"'
    }
}

if (lifeCycleEvnet === 'build:us') {
    buildEnv = {
        BASE_URL: "'http://us.service.1zrent.com:15080/'",
        NODE_ENV: '"production"'
    }
}

if (lifeCycleEvnet === 'build:cn') {
    buildEnv = {
        BASE_URL: "'http://cn.service.1zrent.com:15080/'",
        NODE_ENV: '"production"'
    }
}

module.exports = buildEnv;