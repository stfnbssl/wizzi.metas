/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.starter\.wizzi-override\examples\step_1.js.ittf
    utc time: Wed, 03 Jul 2024 08:34:31 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "starterProdOne", 
    "starterProdTwo"
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