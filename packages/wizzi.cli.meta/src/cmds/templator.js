/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.cli.meta\.wizzi-override\src\cmds\templator.js.ittf
*/
'use strict';
const path = require('path');
const fs = require('fs');
const wizzi = require('wizzi');
const wizziUtils = require('wizzi-utils');
const verify = wizziUtils.verify;
const file = wizziUtils.file;
module.exports = (sourcePath, destPath, ctx) => 

    wizzi.model(sourcePath, {
        cliCtx: ctx
     }, (err, templateModel) => {
    
        if (err) {
            console.log("[31m%s[0m", 'err', err);
            return ;
        }
        //
        var i, i_items=templateModel.children, i_len=templateModel.children.length, child;
        for (i=0; i<i_len; i++) {
            child = templateModel.children[i];
            if (child.name == '$file') {
                processFile(child, destPath)
            }
        }
    }
    )
;
function processFile(node, destPath) {
    var outputPath = path.join(destPath, node.value);
    var sb = [];
    var i, i_items=node.children, i_len=node.children.length, child;
    for (i=0; i<i_len; i++) {
        child = node.children[i];
        processContent(sb, child, 0)
    }
    file.write(outputPath, sb.join('\n'))
}
function processContent(sb, node, indent) {
    sb.push(new Array(indent).join(' ') + decode(node.name) + ' ' + decode(node.value))
    var i, i_items=node.children, i_len=node.children.length, child;
    for (i=0; i<i_len; i++) {
        child = node.children[i];
        processContent(sb, child, indent + 4)
    }
}
function decode(text) {
    text = verify.replaceAll(text, "$", "$");
    return verify.replaceAll(text, "£'('£", "(");
}
