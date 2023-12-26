/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.db\.wizzi-override\examples\step_1.js.ittf
    utc time: Mon, 24 Jul 2023 09:18:53 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "tsDbMongoDb", 
    "tsDbPostgres", 
    "tsDbRedis", 
    "tsDbSequelize"
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
        console.log('result', dump);
    }
    )
}
)
