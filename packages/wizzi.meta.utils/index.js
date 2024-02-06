/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.utils\.wizzi\root\index.js.ittf
    utc time: Tue, 06 Feb 2024 04:37:06 GMT
*/
'use strict';
const path = require('path');
const minimist = require('minimist');
const error = require('./src/utils/error');

const args = minimist(process.argv.slice(2));
console.log('args', args, __filename);
let cmd = args._[0] || 'generate';
if (args.version || args.v) {
    cmd = 'version';
}
if (args.help || args.h || args['?']) {
    cmd = 'help';
}
console.log('cmd', cmd, __filename);
switch (cmd) {
    case 'first': {
        require('./src/commands/first')(args);
        break;
    }
    case 'help': {
        require('./src/commands/help')(args);
        break;
    }
    case 'version': {
        console.log('Version 0.1');
        break;
    }
    default: {
        error(`"${cmd}" is not a valid command!`);
        error(`try wizzi help`, true);
        break;
    }
}
