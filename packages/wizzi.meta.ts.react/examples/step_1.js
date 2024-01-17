/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.react\.wizzi-override\examples\step_1.js.ittf
    utc time: Fri, 23 Jun 2023 11:58:28 GMT
*/
'use strict';
var async = require('async');
var stringify = require('json-stringify-safe');
var metaIndex = require('../index');
var productions = [
    "tsReact", 
    "tsReactApp", 
    "tsReactAssets", 
    "tsReactBasicWebpack", 
    "tsReactBasicVite", 
    "tsReactComponents", 
    "tsReactEditor", 
    "tsReactFeatures", 
    "tsReactNextjsApp", 
    "tsReactPageForms", 
    "tsReactRedux", 
    "tsReactSiteWebpack", 
    "tsReactStoryboard", 
    "tsReactThemes", 
    "tsReactTypings", 
    "tsReactUtils", 
    "tsReactWebpackGetStartedApp", 
    "tsReactWebpackWidgetsApp", 
    "tsReactWidgets"
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