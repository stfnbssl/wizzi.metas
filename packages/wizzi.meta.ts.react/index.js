/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: @wizzi/plugin.js@0.8.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.react\.wizzi-override\root\index.js.ittf
    utc time: Thu, 18 Jul 2024 13:27:04 GMT
*/
'use strict';

var util = require('util');
var path = require('path');
var async = require('async');
var stringify = require('json-stringify-safe');
var wizziUtils = require('@wizzi/utils');
var errors = require('./errors');

const vfile = wizziUtils.fSystem.vfile;

var md = module.exports = {};
md.name = 'wizzi.meta.ts.react.index';
md.version = '0.0.2';

var pluginCategories = [
    {
        name: 'typescript', 
        productions: [
            {
                name: "tsReact"
             }, 
            {
                name: "tsReactApp"
             }, 
            {
                name: "tsReactViteAppStarter"
             }, 
            {
                name: "tsReactAssets"
             }, 
            {
                name: "tsReactBasicWebpack"
             }, 
            {
                name: "tsReactBasicVite"
             }, 
            {
                name: "tsReactComponents"
             }, 
            {
                name: "tsReactEditor"
             }, 
            {
                name: "tsReactDemoApp"
             }, 
            {
                name: "tsReactFeatures"
             }, 
            {
                name: "tsReactNextjsApp"
             }, 
            {
                name: "tsReactPageForms"
             }, 
            {
                name: "tsReactRadixUi"
             }, 
            {
                name: "tsReactRedux"
             }, 
            {
                name: "tsReactSiteWebpack"
             }, 
            {
                name: "tsReactStoryboard"
             }, 
            {
                name: "tsReactThemes"
             }, 
            {
                name: "tsReactTypings"
             }, 
            {
                name: "tsReactUtils"
             }, 
            {
                name: "tsReactWebpackGetStartedApp"
             }, 
            {
                name: "tsReactWebpackWidgetsApp"
             }, 
            {
                name: "tsReactWidgets"
             }
        ]
     }, 
    {
        name: 'react', 
        productions: [
            {
                name: "tsReact"
             }, 
            {
                name: "tsReactApp"
             }, 
            {
                name: "tsReactViteAppStarter"
             }, 
            {
                name: "tsReactAssets"
             }, 
            {
                name: "tsReactBasicWebpack"
             }, 
            {
                name: "tsReactBasicVite"
             }, 
            {
                name: "tsReactComponents"
             }, 
            {
                name: "tsReactEditor"
             }, 
            {
                name: "tsReactDemoApp"
             }, 
            {
                name: "tsReactFeatures"
             }, 
            {
                name: "tsReactNextjsApp"
             }, 
            {
                name: "tsReactPageForms"
             }, 
            {
                name: "tsReactRadixUi"
             }, 
            {
                name: "tsReactRedux"
             }, 
            {
                name: "tsReactSiteWebpack"
             }, 
            {
                name: "tsReactStoryboard"
             }, 
            {
                name: "tsReactThemes"
             }, 
            {
                name: "tsReactTypings"
             }, 
            {
                name: "tsReactUtils"
             }, 
            {
                name: "tsReactWebpackGetStartedApp"
             }, 
            {
                name: "tsReactWebpackWidgetsApp"
             }, 
            {
                name: "tsReactWidgets"
             }
        ]
     }
];
var pluginMetaProductions = [
    {
        name: 'tsReact', 
        title: 'tsReact wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }
        ]
     }, 
    {
        name: 'tsReactApp', 
        title: 'tsReactApp wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'app'
             }
        ]
     }, 
    {
        name: 'tsReactViteAppStarter', 
        title: 'tsReactViteAppStarter wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'vite'
             }, 
            {
                name: 'app'
             }
        ]
     }, 
    {
        name: 'tsReactAssets', 
        title: 'tsReactAssets wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'asset'
             }
        ]
     }, 
    {
        name: 'tsReactBasicWebpack', 
        title: 'tsReactBasicWebpack wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'webpack'
             }, 
            {
                name: 'starter'
             }
        ]
     }, 
    {
        name: 'tsReactBasicVite', 
        title: 'tsReactBasicVite wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'vite'
             }
        ]
     }, 
    {
        name: 'tsReactComponents', 
        title: 'tsReactComponents wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'component'
             }
        ]
     }, 
    {
        name: 'tsReactEditor', 
        title: 'tsReactEditor wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'editor'
             }
        ]
     }, 
    {
        name: 'tsReactDemoApp', 
        title: 'tsReactDemoApp wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'demo'
             }
        ]
     }, 
    {
        name: 'tsReactFeatures', 
        title: 'tsReactFeatures wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'features'
             }
        ]
     }, 
    {
        name: 'tsReactNextjsApp', 
        title: 'tsReactNextjsApp wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'nextjs'
             }
        ]
     }, 
    {
        name: 'tsReactPageForms', 
        title: 'tsReactPageForms wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }
        ]
     }, 
    {
        name: 'tsReactRadixUi', 
        title: 'tsReactRadixUi wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'radixui'
             }
        ]
     }, 
    {
        name: 'tsReactRedux', 
        title: 'tsReactRedux wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'redux'
             }
        ]
     }, 
    {
        name: 'tsReactSiteWebpack', 
        title: 'tsReactSiteWebpack wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'webpack'
             }
        ]
     }, 
    {
        name: 'tsReactStoryboard', 
        title: 'tsReactStoryboard wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'storyboard'
             }
        ]
     }, 
    {
        name: 'tsReactThemes', 
        title: 'tsReactThemes wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'theme'
             }
        ]
     }, 
    {
        name: 'tsReactTypings', 
        title: 'tsReactTypings wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }
        ]
     }, 
    {
        name: 'tsReactUtils', 
        title: 'tsReactUtils wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'utilities'
             }
        ]
     }, 
    {
        name: 'tsReactWebpackGetStartedApp', 
        title: 'tsReactWebpackGetStartedApp wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'webpack'
             }
        ]
     }, 
    {
        name: 'tsReactWebpackWidgetsApp', 
        title: 'tsReactWebpackWidgetsApp wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'webpack'
             }, 
            {
                name: 'widgets'
             }
        ]
     }, 
    {
        name: 'tsReactWidgets', 
        title: 'tsReactWidgets wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'react'
             }, 
            {
                name: 'widgets'
             }
        ]
     }
];

class FactoryMeta {
    constructor(provides) {
        this.name = "wizzi.meta.ts.react";
        this.version = "0.0.2";
        this.provides = provides;
        this.metaCategories = {};
        this.metaProductions = {};
        this.metaContextDefs = {};
    }
    
    initialize(options, callback) {
        // TODO
        return callback(null);
    }
    
    getName() {
        return 'wizzi.meta.ts.react';
    }
    
    getFilename() {
        return __filename;
    }
    
    getProvides() {
        return this.provides;
    }
    
    /**
         Returns the categories of all the productions of the plugin
    */
    getMetaCategoryStarter(options, callback) {
        
        return callback(null, pluginCategories);
    }
    /**
         Build, if not existent, and retrieve a WizziMetaProduction by its production name.
            Returns
                { metaProduction
                 string productionName
                 string metaNamespace
                 { folderTemplates
                 { ittfDocumentTemplates
                 { plainDocuments
                 { metaCtxSchema
                 { wzCtxSchema
    */
    getMetaProduction(productionName, callback) {
        
        var metaProduction = this.metaProductions[productionName] || null;
        
        if (metaProduction != null) {
            return callback(null, metaProduction);
        }
        
        metaProduction = {};
        return this.getFolderTemplates(productionName, metaProduction, (err, notUsed) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.productionName = productionName;
                metaProduction.metaNamespace = "ts.react";
                this.metaProductions[productionName] = metaProduction;
                return callback(null, metaProduction);
            }
            );
    }
    /**
         If the ittf/<productionName>/folderTemplates folder exists
         enrich the metaProduction object with the folderTemplates property
         that contains a packiFile object with the content of the ittf/<productionName>/folderTemplates folder.
         Returns a chained call to the getIttfDocumentTemplates method.
    */
    getFolderTemplates(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'folderTemplates');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.folderTemplates = result;
                return this.getIttfDocumentTemplates(productionName, metaProduction, callback);
            }
            )
        }
        else {
            return this.getIttfDocumentTemplates(productionName, metaProduction, callback);
        }
    }
    /**
         If the ittf/<productionName>/ittfDocumentTemplates folder exists
         enrich the metaProduction object with the ittfDocumentTemplates property
         that contains a packiFile object with the content of the ittf/<productionName>/ittfDocumentTemplates folder.
         Returns a chained call to the getPlainDocuments method.
    */
    getIttfDocumentTemplates(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'ittfDocumentTemplates');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.ittfDocumentTemplates = result;
                return this.getPlainDocuments(productionName, metaProduction, callback);
            }
            )
        }
        else {
            return this.getPlainDocuments(productionName, metaProduction, callback);
        }
    }
    /**
         If the ittf/<productionName>/plainDocuments folder exists
         enrich the metaProduction object with the plainDocuments property
         that contains a packiFile object with the content of the ittf/<productionName>/plainDocuments folder.
         Returns a chained call to the getMetaCtxSchema method.
    */
    getPlainDocuments(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'plainDocuments');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.plainDocuments = result;
                return this.getMetaCtxSchema(productionName, metaProduction, callback);
            }
            )
        }
        else {
            return this.getMetaCtxSchema(productionName, metaProduction, callback);
        }
    }
    /**
         If the ittf/<productionName>/metaCtxSchema folder exists
         Enrich the metaProduction object with the metaCtxSchema property
         that contains a packiFile object with the content of the ittf/<productionName>/metaCtxSchema folder.
         Returns a chained call to the getWzCtxSchema method.
    */
    getMetaCtxSchema(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'metaCtxSchema');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.metaCtxSchema = result;
                return this.getWzCtxSchema(productionName, metaProduction, callback);
            }
            )
        }
        else {
            return this.getWzCtxSchema(productionName, metaProduction, callback);
        }
    }
    /**
         If the ittf/<productionName>/wzCtxSchema folder exists
         Enrich the metaProduction object with the wzCtxSchema property
         that contains a packiFile object with the content of the ittf/<productionName>/wzCtxSchema folder.
    */
    getWzCtxSchema(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'wzCtxSchema');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaProduction.wzCtxSchema = result;
                return callback(null);
            }
            )
        }
        else {
            return callback(null);
        }
    }
    /**
         Build and returns a packiFiles object with all the meta ittf documents
         of the WizziMetaProductions that have the property use<metaProduction>
         of the object options.metaCtx set to true.
         The packiFiles filepaths are built this way:
         - folderTemplates/<ProductionName><metaFilePath>
         - ittfDocumentTemplates/<ProductionName><metaFilePath>
         - plainDocuments/<ProductionName><metaFilePath>
         For each metaProduction used the returned packiFiles object must contain a document
         with filePath 'folderTemplates/<ProductionName>/index.ittf.ittf'
    */
    getMetaProductionStarter(options, callback) {
        
        async.map(pluginMetaProductions, (prod, callback) => {
            const prodName = prod.name;
            if (options && options.metaCtx) {
                const useProductionVar = 'use' + prod.name[0].toUpperCase() + prod.name.substring(1);
                if (!options.metaCtx[useProductionVar]) {
                    return callback(null, {});
                }
                console.log("[32m%s[0m", 'using meta production', useProductionVar);
            }
            this.getMetaProduction(prodName, (err, metaProduction) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, metaProduction);
            }
            )
        }
        , (err, metaProductions) => {
            const result = {};
            var i, i_items=metaProductions, i_len=metaProductions.length, mp;
            for (i=0; i<i_len; i++) {
                mp = metaProductions[i];
                if (mp.folderTemplates) {
                    for (var k in mp.folderTemplates) {
                        var newk = 'folderTemplates/' + mp.productionName + '/' + k;
                        result[newk] = mp.folderTemplates[k];
                    }
                }
                if (mp.ittfDocumentTemplates) {
                    for (var k in mp.ittfDocumentTemplates) {
                        var newk = 'ittfDocumentTemplates/' + mp.productionName + '/' + k;
                        result[newk] = mp.ittfDocumentTemplates[k];
                    }
                }
            }
            if (mp.plainDocuments) {
                for (var k in mp.plainDocuments) {
                    var newk = 'plainDocuments/' + mp.productionName + '/' + k;
                    result[newk] = mp.plainDocuments[k];
                }
            }
            return callback(null, result);
        }
        )
    }
    /**
         Build, if not existent, and retrieve the contexts of a WizziMetaProduction by its production name.
            Returns
                { metaContextDefs
                 string productionName
                 { metaCtxSchema
                 { wzCtxSchema
    */
    getMetaContextDefs(productionName, callback) {
        
        var metaContextDefs = this.metaContextDefs[productionName] || null;
        
        if (metaContextDefs != null) {
            return callback(null, metaContextDefs);
        }
        
        metaContextDefs = {};
        return this.getTParams(productionName, metaContextDefs, (err, notUsed) => {
                if (err) {
                    return callback(err);
                }
                metaContextDefs.productionName = productionName;
                this.metaContextDefs[productionName] = metaContextDefs;
                return callback(null, metaContextDefs);
            }
            );
    }
    /**
         Enrich the metaContextDefs object with the ittf/t/params folder
         that contains the templates for declaring context parameters of meta productions.
         Returns a chained call to the getMetaCtxSchema method.
    */
    getTParams(productionName, metaContextDefs, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', 't', 'params');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaContextDefs.ittfTParams = result;
                return this.getMetaCtxSchema(productionName, metaContextDefs, callback);
            }
            )
        }
        else {
            return this.getMetaCtxSchema(productionName, metaContextDefs, callback);
        }
    }
    /**
         If the ittf/<productionName>/metaCtxSchema folder exists
         Enrich the metaContextDefs object with the metaCtxSchema property
         that contains a packiFile object with the content of the ittf/<productionName>/metaCtxSchema folder.
         Returns a chained call to the getWzCtxSchema method.
    */
    getMetaCtxSchema(productionName, metaContextDefs, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'metaCtxSchemas');
        if (fsFile.isDirectory(folderPath)) {
            createPackifilesFromFs(folderPath, (err, result) => {
                if (err) {
                    return callback(err);
                }
                metaContextDefs.metaCtxSchema = result;
                return callback(null);
            }
            )
        }
        else {
            return callback(null);
        }
    }
    /**
         Build and returns a packiFiles object with all the meta ittf documents
         of any WizziMetaProduction
         The packiFiles filepaths are built this way:
         - folderTemplates/<ProductionName><metaFilePath>
         - ittfDocumentTemplates/<ProductionName><metaFilePath>
         - plainDocuments/<ProductionName><metaFilePath>
         For each metaProduction the returned packiFiles object must contain:
         . a document with filePath 'folderTemplates/<ProductionName>/index.ittf.ittf'
         . a document with filePath 'folderTemplates/<ProductionName>/index.ittf.ittf'
    */
    getMetaContextDefsStarter(options, callback) {
        
        async.map(pluginMetaProductions, (prod, callback) => {
            if (options && options.metaCtx) {
                const useProductionVar = 'use' + prod.name[0].toUpperCase() + prod.name.substring(1);
                if (!options.metaCtx[useProductionVar]) {
                    return callback(null, {});
                }
                console.log('getMetaContextDefsStarter.useProduction', useProductionVar, options.metaCtx[useProductionVar], __filename);
            }
            this.getMetaContextDefs(prod.name, (err, metaContextDefs) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, metaContextDefs);
            }
            )
        }
        , (err, metaContextDefs) => {
            const result = {};
            var i, i_items=metaContextDefs, i_len=metaContextDefs.length, mp;
            for (i=0; i<i_len; i++) {
                mp = metaContextDefs[i];
                if (mp.ittfTParams) {
                    for (var k in mp.ittfTParams) {
                        var newk = 'metaCtxSchema/' + mp.productionName + '/t/params/' + k;
                        result[newk] = mp.ittfTParams[k];
                    }
                }
                if (mp.metaCtxSchema) {
                    for (var k in mp.metaCtxSchema) {
                        var newk = 'metaCtxSchema/' + mp.productionName + '/' + k;
                        result[newk] = mp.metaCtxSchema[k];
                    }
                }
            }
            return callback(null, result);
        }
        )
    }
    
}

/**
     Scan a filesystem folder and returns the content in a packiFiles object.
*/
function createPackifilesFromFs(folderPath, callback) {
    const fsFile = vfile();
    fsFile.getFiles(folderPath, {
        deep: true, 
        documentContent: true
     }, (err, files) => {
        if (err) {
            return callback(err);
        }
        const packiFiles = {};
        var i, i_items=files, i_len=files.length, file;
        for (i=0; i<i_len; i++) {
            file = files[i];
            packiFiles[file.relPath] = {
                type: 'CODE', 
                contents: file.content
             };
        }
        return callback(null, packiFiles);
    }
    )
}

function error(errorName, method, message, innerError) {
    return new errors.WizziMetaError(message, null, {
            errorName: errorName, 
            method: md.name + '.' + method, 
            sourcePath: __filename, 
            inner: innerError
         });
}

module.exports = {
    version: '0.0.2', 
    provides: {
        categories: pluginCategories, 
        metaProductions: pluginMetaProductions
     }, 
    createMetaPlugin: function(options, callback) {
        var meta = new FactoryMeta(this.provides);
        meta.initialize(options, (err, notUsed) => {
            if (err) {
                return callback(err);
            }
            return callback(null, meta);
        }
        )
    }
 };