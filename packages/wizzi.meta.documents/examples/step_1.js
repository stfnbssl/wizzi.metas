/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.documents\.wizzi-override\examples\step_1.js.ittf
    utc time: Wed, 17 May 2023 16:22:16 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "documentsApp", 
    "documentsDocx", 
    "documentsHtmlSlide", 
    "documentsJson", 
    "documentsPdf", 
    "documentsPpt", 
    "documentsUtils"
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
