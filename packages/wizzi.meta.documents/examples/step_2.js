/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.documents\.wizzi-override\examples\step_2.js.ittf
    utc time: Sat, 24 Feb 2024 06:30:51 GMT
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
