/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.express\.wizzi-override\examples\step_3.js.ittf
    utc time: Tue, 06 Feb 2024 10:14:26 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
metaIndex.createMetaPlugin({}, (err, mf) => {

    if (err) {
        return callback(err);
    }
    mf.getMetaCtxStarter({}, (err, metaCtxs) => {
    
        if (err) {
            return callback(err);
        }
        const dump = stringify(metaCtxs, null, 2);
        console.log('metaCtxs', dump, __filename);
    }
    )
}
)
