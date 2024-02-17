/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.utils\.wizzi-override\src\actions\generate_all.js.ittf
    utc time: Fri, 16 Feb 2024 07:56:26 GMT
*/
'use strict';
const path = require("path");
const spawnUtils = require("../services/spawn");

const metaList = [
    "cloud", 
    "commons", 
    "docs", 
    "documents", 
    "js.db", 
    "js.express", 
    "js", 
    "js.node", 
    "js.react", 
    "js.vanilla", 
    "ts.db", 
    "ts.express", 
    "ts", 
    "ts.nextjs", 
    "ts.react", 
    "web"
];

function doGenerate(ndx) {
    var metaName = metaList[ndx];
    if (!metaName) {
        console.log("[32m%s[0m", "All generations done");
        return ;
    }
    executeWizziGeneration(metaName, (err, notUsed) => {
    
        if (err) {
            return callback(err);
        }
        console.log("[32m%s[0m", "*** Generation of meta " + metaName + " DONE ***");
        doGenerate(ndx + 1)
    }
    )
}
doGenerate(0)
function executeWizziGeneration(metaName, callback) {
    console.log('Starting generation of ', metaName, __filename);
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("wz override", {
        cwd: "C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta." + metaName
     });
    spawnUtils.psOutput(ps, {}, (err, stdout, stderr) => {
    
        console.log("powershell 2", err || stderr || stdout, __filename);
        callback(null)
    }
    )
}
