/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.utils\.wizzi-override\src\actions\upgrade_1.js.ittf
    utc time: Fri, 16 Feb 2024 07:56:26 GMT
*/
'use strict';
const path = require("path");
const file = require("@wizzi/utils").fSystem.file;
const spawnUtils = require("../services/spawn");

const metasFolder = "C:/My/wizzi/stfnbssl/wizzi.metas/packages";

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

function doUpgrade(ndx) {
    var metaName = metaList[ndx];
    if (!metaName) {
        console.log("[32m%s[0m", "All meta upgrades done");
        return ;
    }
    deleteFiles(metaName, (err, notUsed) => {
    
        if (err) {
            return callback(err);
        }
        updateFiles(metaName, (err, notUsed) => {
        
            if (err) {
                return callback(err);
            }
            updateFolders(metaName, (err, notUsed) => {
            
                if (err) {
                    return callback(err);
                }
                console.log("[32m%s[0m", "*** Upgrade of meta folders of  " + metaName + " DONE ***");
                doUpgrade(ndx + 1)
            }
            )
        }
        )
    }
    )
}
doUpgrade(0)
function updateFiles(metaName, callback) {
    const metaFolder = path.join(metasFolder, "wizzi.meta." + metaName);
    //
    //
    const gen_items = [
        "generate.wfjob"
    ];
    var i, i_items=gen_items, i_len=gen_items.length, item;
    for (i=0; i<i_len; i++) {
        item = gen_items[i];
        const fromFile = path.join(metaFolder, ".wizzi", item + ".ittf");
        const toFile = path.join(metaFolder, ".wizzi-override", item + ".ittf");
        file.copy(fromFile, toFile)
    }
    //
    //
    const root_t_items = [
        "t/meta-category-starter.js", 
        "t/meta-ctx-starter.js", 
        "t/meta-ctx.js", 
        "index.js", 
        "package.json"
    ];
    var i, i_items=root_t_items, i_len=root_t_items.length, item;
    for (i=0; i<i_len; i++) {
        item = root_t_items[i];
        const fromFile = path.join(metaFolder, ".wizzi", "root", item + ".ittf");
        const toFile = path.join(metaFolder, ".wizzi-override", "root", item + ".ittf");
        file.copy(fromFile, toFile)
    }
    //
    //
    const models = [
        "wzctx.json.ittf"
    ];
    var i, i_items=models, i_len=models.length, item;
    for (i=0; i<i_len; i++) {
        item = models[i];
        const fromFile = path.join(metaFolder, ".wizzi", "models", item);
        const toFile = path.join(metaFolder, ".wizzi-override", "models", item);
        file.copy(fromFile, toFile)
    }
    //
    //
    const examples = [
        "step_1.js.ittf", 
        "step_2.js.ittf", 
        "step_3.js.ittf", 
        "step_4.js.ittf"
    ];
    var i, i_items=examples, i_len=examples.length, item;
    for (i=0; i<i_len; i++) {
        item = examples[i];
        const fromFile = path.join(metaFolder, ".wizzi", "examples", item);
        const toFile = path.join(metaFolder, ".wizzi-override", "examples", item);
        file.copy(fromFile, toFile)
    }
    //
    //
    const tFolder = [
        "package/0_0_1/scripts.json.ittf"
    ];
    var i, i_items=tFolder, i_len=tFolder.length, item;
    for (i=0; i<i_len; i++) {
        item = tFolder[i];
        const fromFile = path.join(metaFolder, ".wizzi", "t", item);
        const toFile = path.join(metaFolder, ".wizzi-override", "t", item);
        file.copy(fromFile, toFile)
    }
    callback(null)
}
function deleteFiles(metaName, callback) {
    const metaFolder = path.join(metasFolder, "wizzi.meta." + metaName);
    const files = [
        "array.ittf.ittf", 
        "object.ittf.ittf", 
        "string.ittf.ittf", 
        "boolean.ittf.ittf", 
        "enum.ittf.ittf", 
        "integer.ittf.ittf", 
        "use.ittf.ittf"
    ];
    function exec(ndx) {
        const fileName = files[ndx];
        if (!fileName) {
            return callback(null);
        }
        let filePath = path.join(metaFolder, '.wizzi', 'ittf', 't', 'params', fileName);
        file.deleteFile(filePath, (err, notUsed) => {
        
            if (err) {
                return callback(err);
            }
            console.log('deleted file', filePath, __filename);
            filePath = path.join(metaFolder, '.wizzi-override', 'ittf', 't', 'params', fileName)
            ;
            file.deleteFile(filePath, (err, notUsed) => {
            
                if (err) {
                    return callback(err);
                }
                console.log('deleted file', filePath, __filename);
                exec(ndx + 1)
            }
            )
        }
        )
    }
    exec(0)
}
function deleteFolders(metaName, callback) {
    const metaFolder = path.join(metasFolder, "wizzi.meta." + metaName);
    const folders = [
        ".wizzi-override/ittf/t/params"
    ];
    function exec(ndx) {
        const folderName = folders[ndx];
        if (!folderName) {
            return callback(null);
        }
        const folderPath = path.join(metaFolder, folderName);
        file.deleteFolder(folderName, (err, notUsed) => {
        
            if (err) {
                return callback(err);
            }
            console.log('deleted folder', folderPath, __filename);
            exec(ndx + 1)
        }
        )
    }
    exec(0)
}
function updateFolders(metaName, callback) {
    const metaFolder = path.join(metasFolder, "wizzi.meta." + metaName);
    const folders = [
        ".wizzi-override/t/package/0_0_1", 
        "ittf/t/params"
    ];
    function exec(ndx) {
        const folderName = folders[ndx];
        if (!folderName) {
            return callback(null);
        }
        const fromFolder = path.join(metaFolder, ".wizzi", folderName);
        const toFolder = path.join(metaFolder, folderName);
        file.copyFolder(fromFolder, toFolder, (err, notUsed) => {
        
            if (err) {
                return callback(err);
            }
            console.log('copied folder from', fromFolder, 'to', toFolder, __filename);
            exec(ndx + 1)
        }
        )
    }
    exec(0)
}
