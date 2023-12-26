/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.commons\.wizzi-override\examples\step_2.js.ittf
    utc time: Mon, 17 Jul 2023 13:37:21 GMT
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
        console.log('metaProduction', dump);
    }
    )
}
)
