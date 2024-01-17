/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.express\.wizzi-override\examples\step_1.js.ittf
    utc time: Fri, 21 Jul 2023 09:01:37 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "tsExpress", 
    "tsExpressApp", 
    "tsExpressData", 
    "tsExpressFeatureAccount", 
    "tsExpressFeatureAuth", 
    "tsExpressFeatureBlog", 
    "tsExpressFeatureConfig", 
    "tsExpressFeatureCdn", 
    "tsExpressFeatureFilesystem", 
    "tsExpressFeatureGithub", 
    "tsExpressFeaturePacki", 
    "tsExpressFeatureProject", 
    "tsExpressFeatureRepo", 
    "tsExpressFeatureUser", 
    "tsExpressFeatureWizzi", 
    "tsExpressFeatureWizziDocs", 
    "tsExpressFeatureWizziFs", 
    "tsExpressFeatureWizziGist", 
    "tsExpressFeatureWizziMeta", 
    "tsExpressFeatureWizziProduction", 
    "tsExpressIttf", 
    "tsExpressStyles", 
    "tsExpressTests", 
    "tsExpressUtils", 
    "tsExpressWizziSite"
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