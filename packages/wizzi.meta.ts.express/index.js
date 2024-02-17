/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts.express\.wizzi-override\root\index.js.ittf
    utc time: Fri, 16 Feb 2024 08:22:56 GMT
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
md.name = 'wizzi.meta.ts.express.index';
md.version = '0.0.2';

var pluginCategories = [
    {
        name: 'typescript', 
        productions: [
            {
                name: "tsExpress"
             }, 
            {
                name: "tsExpressApp"
             }, 
            {
                name: "tsExpressData"
             }, 
            {
                name: "tsExpressFeatureAccount"
             }, 
            {
                name: "tsExpressFeatureAuth"
             }, 
            {
                name: "tsExpressFeatureBlog"
             }, 
            {
                name: "tsExpressFeatureConfig"
             }, 
            {
                name: "tsExpressFeatureCdn"
             }, 
            {
                name: "tsExpressFeatureFilesystem"
             }, 
            {
                name: "tsExpressFeatureGithub"
             }, 
            {
                name: "tsExpressFeaturePacki"
             }, 
            {
                name: "tsExpressFeatureProject"
             }, 
            {
                name: "tsExpressFeatureRepo"
             }, 
            {
                name: "tsExpressFeatureUser"
             }, 
            {
                name: "tsExpressFeatureWizzi"
             }, 
            {
                name: "tsExpressFeatureWizziDocs"
             }, 
            {
                name: "tsExpressFeatureWizziFs"
             }, 
            {
                name: "tsExpressFeatureWizziGist"
             }, 
            {
                name: "tsExpressFeatureWizziMeta"
             }, 
            {
                name: "tsExpressFeatureWizziProduction"
             }, 
            {
                name: "tsExpressIttf"
             }, 
            {
                name: "tsExpressStyles"
             }, 
            {
                name: "tsExpressTests"
             }, 
            {
                name: "tsExpressUtils"
             }, 
            {
                name: "tsExpressWizziSite"
             }
        ]
     }, 
    {
        name: 'express', 
        productions: [
            {
                name: "tsExpress"
             }, 
            {
                name: "tsExpressApp"
             }, 
            {
                name: "tsExpressData"
             }, 
            {
                name: "tsExpressFeatureAccount"
             }, 
            {
                name: "tsExpressFeatureAuth"
             }, 
            {
                name: "tsExpressFeatureBlog"
             }, 
            {
                name: "tsExpressFeatureConfig"
             }, 
            {
                name: "tsExpressFeatureCdn"
             }, 
            {
                name: "tsExpressFeatureFilesystem"
             }, 
            {
                name: "tsExpressFeatureGithub"
             }, 
            {
                name: "tsExpressFeaturePacki"
             }, 
            {
                name: "tsExpressFeatureProject"
             }, 
            {
                name: "tsExpressFeatureRepo"
             }, 
            {
                name: "tsExpressFeatureUser"
             }, 
            {
                name: "tsExpressFeatureWizzi"
             }, 
            {
                name: "tsExpressFeatureWizziDocs"
             }, 
            {
                name: "tsExpressFeatureWizziFs"
             }, 
            {
                name: "tsExpressFeatureWizziGist"
             }, 
            {
                name: "tsExpressFeatureWizziMeta"
             }, 
            {
                name: "tsExpressFeatureWizziProduction"
             }, 
            {
                name: "tsExpressTests"
             }, 
            {
                name: "tsExpressWizziSite"
             }
        ]
     }
];
var pluginMetaProductions = [
    {
        name: 'tsExpress', 
        title: 'tsExpress wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }
        ]
     }, 
    {
        name: 'tsExpressApp', 
        title: 'tsExpressApp wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'webapp'
             }
        ]
     }, 
    {
        name: 'tsExpressData', 
        title: 'tsExpressData wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureAccount', 
        title: 'tsExpressFeatureAccount wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'account'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureAuth', 
        title: 'tsExpressFeatureAuth wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'auth'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureBlog', 
        title: 'tsExpressFeatureBlog wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'blog'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureConfig', 
        title: 'tsExpressFeatureConfig wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'config'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureCdn', 
        title: 'tsExpressFeatureCdn wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'cdn'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureFilesystem', 
        title: 'tsExpressFeatureFilesystem wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'filesystem'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureGithub', 
        title: 'tsExpressFeatureGithub wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'github'
             }
        ]
     }, 
    {
        name: 'tsExpressFeaturePacki', 
        title: 'tsExpressFeaturePacki wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'packi'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureProject', 
        title: 'tsExpressFeatureProject wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'project'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureRepo', 
        title: 'tsExpressFeatureRepo wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'repo'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureUser', 
        title: 'tsExpressFeatureUser wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'user'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizzi', 
        title: 'tsExpressFeatureWizzi wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizziDocs', 
        title: 'tsExpressFeatureWizziDocs wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'documentation'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizziFs', 
        title: 'tsExpressFeatureWizziFs wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'filesystem'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizziGist', 
        title: 'tsExpressFeatureWizziGist wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'gist'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizziMeta', 
        title: 'tsExpressFeatureWizziMeta wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'meta'
             }
        ]
     }, 
    {
        name: 'tsExpressFeatureWizziProduction', 
        title: 'tsExpressFeatureWizziProduction wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'feature'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'wizzi-production'
             }
        ]
     }, 
    {
        name: 'tsExpressIttf', 
        title: 'tsExpressIttf wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'ittf'
             }
        ]
     }, 
    {
        name: 'tsExpressStyles', 
        title: 'tsExpressStyles wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'styles'
             }
        ]
     }, 
    {
        name: 'tsExpressTests', 
        title: 'tsExpressTests wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'tests'
             }
        ]
     }, 
    {
        name: 'tsExpressUtils', 
        title: 'tsExpressUtils wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'utilities'
             }
        ]
     }, 
    {
        name: 'tsExpressWizziSite', 
        title: 'tsExpressWizziSite wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'express'
             }, 
            {
                name: 'wizzi'
             }, 
            {
                name: 'view-engine'
             }
        ]
     }
];

class FactoryMeta {
    constructor(provides) {
        this.name = "wizzi.meta.ts.express";
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
        return 'wizzi.meta.ts.express';
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
         Retrieve a WizziMetaProduction by its production name
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
                metaProduction.metaNamespace = "ts.express";
                this.metaProductions[productionName] = metaProduction;
                return callback(null, metaProduction);
            }
            );
    }
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
         Retrieve all WizziMetaProductions
         Simple starter meta generation
    */
    getMetaProductionStarter(options, callback) {
        
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
        async.map(productions, (prod, callback) => {
        
            if (options && options.metaCtx) {
                const useProductionVar = 'use' + prod[0].toUpperCase() + prod.substring(1);
                if (!options.metaCtx[useProductionVar]) {
                    return callback(null, {});
                }
                console.log('using meta production', useProductionVar, options.metaCtx[useProductionVar], __filename);
            }
            this.getMetaProduction(prod, (err, metaProduction) => {
            
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
                for (var k in mp.folderTemplates) {
                    var newk = 'folderTemplates/' + mp.productionName + '/' + k;
                    result[newk] = mp.folderTemplates[k];
                }
                for (var k in mp.ittfDocumentTemplates) {
                    var newk = 'ittfDocumentTemplates/' + mp.productionName + '/' + k;
                    result[newk] = mp.ittfDocumentTemplates[k];
                }
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
