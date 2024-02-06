/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: json:/___template/wizzi.config.js.ittf
    utc time: Mon, 05 Feb 2024 15:14:16 GMT
*/
'use strict';
const path = require('path');
module.exports = {
    wfjobName: "wizzi.meta.utils/job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: __dirname, 
    plugins: [
        "./wizzi.plugin.css/index.js", 
        "./wizzi.plugin.docx/index.js", 
        "./wizzi.plugin.graphql/index.js", 
        "./wizzi.plugin.html/index.js", 
        "./wizzi.plugin.ittf/index.js", 
        "./wizzi.plugin.js/index.js", 
        "./wizzi.plugin.ts/index.js", 
        "./wizzi.plugin.json/index.js", 
        "./wizzi.plugin.md/index.js", 
        "./wizzi.plugin.pandoc/index.js", 
        "./wizzi.plugin.pdf/index.js", 
        "./wizzi.plugin.plain/index.js", 
        "./wizzi.plugin.ppt/index.js", 
        "./wizzi.plugin.text/index.js", 
        "./wizzi.plugin.svg/index.js", 
        "./wizzi.plugin.wzjob/index.js", 
        "./wizzi.plugin.wzschema/index.js", 
        "./wizzi.plugin.xml/index.js", 
        "./wizzi.plugin.yaml/index.js"
    ], 
    pluginsBaseFolder: "C:/My/wizzi/stfnbssl/wizzi.plugins/packages", 
    schemas: [
        
    ], 
    globalContext: {
        wzConfigIsDevelopment: true, 
        wzConfigIsPackageDeploy: false, 
        wzConfigIsDocumentation: true
     }
 };
