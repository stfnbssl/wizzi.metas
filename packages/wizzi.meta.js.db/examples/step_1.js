/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.js.db\.wizzi-override\examples\step_1.js.ittf
    utc time: Tue, 06 Feb 2024 10:14:13 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "jsDbMongoDb", 
    "jsDbPostgres", 
    "jsDbRedis", 
    "jsDbSequelize"
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
