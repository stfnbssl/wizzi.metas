/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.commons\.wizzi-override\examples\step_1.js.ittf
    utc time: Tue, 16 Jan 2024 12:22:47 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "commonsBabel", 
    "commonsBabelrc", 
    "commonsDeploy", 
    "commonsEnv", 
    "commonsEslint", 
    "commonsGit", 
    "commonsPackage", 
    "commonsPostcss", 
    "commonsPrettier", 
    "commonsServerCertificate", 
    "commonsTailwind", 
    "commonsWebpack", 
    "commonsWizzi"
];
metaIndex.createMetaPlugin({}, (err, mf) => {

    if (err) {
        return callback(err);
    }
    async.map(productions, (prod, callback) => 
    
        mf.getMetaProduction(prod, (err, metaProduction) => {
        
            if (err) {
                return callback(err);
            }
            return callback(null, metaProduction);
        }
        )
    , (err, result) => {
    
        const dump = stringify(result, null, 2);
        console.log('result', dump, __filename);
    }
    )
}
)
