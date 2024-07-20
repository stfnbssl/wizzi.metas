/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.starter\.wizzi-override\examples\step_2.js.ittf
    utc time: Wed, 03 Jul 2024 08:34:31 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
metaIndex.createMetaPlugin({}, (err, mf) => {
    if (err) {
        return callback(err);
    }
    mf.getMetaProductionStarter({}, (err, metaProductions) => {
        if (err) {
            return callback(err);
        }
        const dump = stringify(metaProductions, null, 2);
        console.log('metaProductions', dump, __filename);
    }
    )
}
)