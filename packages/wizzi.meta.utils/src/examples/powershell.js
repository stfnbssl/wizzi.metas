/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.utils\.wizzi\src\examples\powershell.js.ittf
    utc time: Mon, 05 Feb 2024 14:51:49 GMT
*/
'use strict';
const path = require("path");
const spawnUtils = require("../src/services/spawn");
var choice = process.argv[2] || '1';
if (choice == '1') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("echo 'powershell is awesome'");
    ps.on("error", err => 
    
        console.error(err)
    )
    ps.on("output", data => 
    
        console.log(data)
    )
    ps.on("error-output", data => 
    
        console.error(data)
    )
    ps.on("end", (code) => {
    
    }
    )
}
if (choice == '2') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("dir");
    spawnUtils.psOutput(ps, {}, (err, stdout, stderr) => {
    
        console.log("powershell 2", err || stderr || stdout, __filename);
    }
    )
}
if (choice == '3') {
    const PowerShell = spawnUtils.PowerShell;
    let ps = new PowerShell("wz override", {
        cwd: "C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.hub"
     });
    spawnUtils.psOutput(ps, {}, (err, stdout, stderr) => {
    
        console.log("powershell 2", err || stderr || stdout, __filename);
    }
    )
}
