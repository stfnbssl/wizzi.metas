/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.wizzi.dev\.wizzi-override\examples\step_4.js.ittf
    utc time: Sat, 01 Jun 2024 04:30:55 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
metaIndex.createMetaPlugin({}, (err, mf) => {

    if (err) {
        return callback(err);
    }
    mf.getMetaCategoryStarter({}, (err, metaCategories) => {
    
        if (err) {
            return callback(err);
        }
        const dump = stringify(metaCategories, null, 2);
        console.log('metaCategories', dump, __filename);
    }
    )
}
)
