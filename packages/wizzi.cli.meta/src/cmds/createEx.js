/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.cli.meta\.wizzi-override\src\cmds\createEx.js.ittf
*/
'use strict';
const path = require('path');
const wizzi = require('wizzi');
const wizziUtils = require('wizzi-utils');
const verify = wizziUtils.verify;
const vfile = wizziUtils.vfile;
const templator = require('./templator');
var file = vfile();
var meta_generators = [
    'ts-node', 
    'ts-express', 
    'ts-client', 
    'js-vanilla', 
    'js-wizzi-plugin', 
    'js-wizzi-meta'
];
module.exports = (options) => {

    options = options || {};
    if (meta_generators.indexOf(options.metaGenerator) < 0) {
        throw new Error('createEx. Unknown metaGenerator: ' + options.metaGenerator);
    }
    var dataWizziPlugins = [];
    try {
        dataWizziPlugins = JSON.parse(file.read(path.join(__dirname, 'data/wizzi.plugins.data.json'))).wizziPackages
        ;
    } 
    catch (ex) {
    } 
    var metaGeneratorFolderPath = path.join(__dirname, '..', '..', 'meta-generators', options.metaGenerator);
    var metaGeneratorContextPath = path.join(metaGeneratorFolderPath, 'contexts', options.context + '.json.ittf');
    console.log('metaGeneratorContextPath', metaGeneratorContextPath);
    var metaGeneratorIndex = path.join(metaGeneratorFolderPath, 'index.ittf.ittf');
    console.log('metaGeneratorIndex', metaGeneratorIndex);
    var metaGenerationContextPath = path.join(__dirname, '..', '..', 'meta-templates', '__temp', options.metaGenerator, options.context);
    console.log('metaGenerationContextPath', metaGenerationContextPath, __filename);
    wizzi.model(path.join(metaGeneratorContextPath), {
        cliCtx: {
            pkgName: options.pkgName, 
            description: options.pkgName
         }
     }, (err, cliCtx) => {
    
        if (err) {
            console.log("[31m%s[0m", 'createEx.load context.error:', err);
            return ;
        }
        cliCtx.wizziPlugins = dataWizziPlugins;
        templator(metaGeneratorIndex, metaGenerationContextPath, cliCtx)
        
        console.log('createEx.before genFolder.cliCtx', cliCtx, __filename);
        
        return wizzi.genFolder(metaGenerationContextPath, {
                cliCtx: cliCtx
             }, {
                destFolder: options.destPath ? options.destPath : path.join('C:/My/wizzi/stfnbssl/wizzi.meta.demos/packages', options.pkgName), 
                copyInclude: ['*'], 
                copyExclude: []
             }, (err, genFolderResult) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'err', err);
                    throw new Error(err.message);
                }
                console.log('genFolderResult', genFolderResult, __filename);
                return ;
            }
            );
    }
    )
}
;
