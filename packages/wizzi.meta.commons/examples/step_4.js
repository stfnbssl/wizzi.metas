/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.commons\.wizzi-override\examples\step_4.js.ittf
    utc time: Fri, 16 Feb 2024 08:22:38 GMT
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
