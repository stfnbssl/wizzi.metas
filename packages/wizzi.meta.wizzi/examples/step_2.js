/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.wizzi\.wizzi-override\examples\step_2.js.ittf
    utc time: Tue, 16 Jan 2024 14:13:29 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
metaIndex.createMetaPlugin({}, (err, mf) => {

    if (err) {
        return callback(err);
    }
    mf.getMetaProductionStarter({}, (err, metaProduction) => {
    
        if (err) {
            return callback(err);
        }
        const dump = stringify(metaProduction, null, 2);
        console.log('metaProduction', dump, __filename);
    }
    )
}
)
