/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts\.wizzi-override\root\index.js.ittf
    utc time: Fri, 16 Feb 2024 08:22:58 GMT
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
md.name = 'wizzi.meta.ts.index';
md.version = '0.0.2';

var pluginCategories = [
    {
        name: 'typescript', 
        productions: [
            {
                name: "tsCommons"
             }, 
            {
                name: "tsEsmWrapper"
             }, 
            {
                name: "tsNode"
             }, 
            {
                name: "tsNodeFeatureGithub"
             }, 
            {
                name: "tsUtils"
             }
        ]
     }
];
var pluginMetaProductions = [
    {
        name: 'tsCommons', 
        title: 'tsCommons wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'commons'
             }
        ]
     }, 
    {
        name: 'tsEsmWrapper', 
        title: 'tsEsmWrapper wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'esm'
             }
        ]
     }, 
    {
        name: 'tsNode', 
        title: 'tsNode wizzi meta production', 
        isPackageMain: true, 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'nodejs'
             }
        ]
     }, 
    {
        name: 'tsNodeFeatureGithub', 
        title: 'tsNodeFeatureGithub wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'github'
             }, 
            {
                name: 'nodejs'
             }
        ]
     }, 
    {
        name: 'tsUtils', 
        title: 'tsUtils wizzi meta production', 
        categories: [
            {
                name: 'typescript'
             }, 
            {
                name: 'utilities'
             }
        ]
     }
];

class FactoryMeta {
    constructor(provides) {
        this.name = "wizzi.meta.ts";
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
        return 'wizzi.meta.ts';
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
        
        const fsFile = vfile();
        
        var productionFolderTemplatesPath = path.resolve(__dirname, 'ittf', productionName, 'folderTemplates');
        if (fsFile.isDirectory(productionFolderTemplatesPath)) {
            createPackifilesFromFs(productionFolderTemplatesPath, (err, folderTemplates) => {
            
                if (err) {
                    return callback(err);
                }
                var productionIttfDocumentTemplatesPath = path.resolve(__dirname, 'ittf', productionName, 'ittfDocumentTemplates');
                if (fsFile.isDirectory(productionIttfDocumentTemplatesPath)) {
                    createPackifilesFromFs(productionIttfDocumentTemplatesPath, (err, ittfDocumentTemplates) => {
                    
                        if (err) {
                            return callback(err);
                        }
                        var productionMetaCtxSchemasPath = path.resolve(__dirname, 'ittf', productionName, 'metaCtxSchemas');
                        if (fsFile.isDirectory(productionMetaCtxSchemasPath)) {
                            createPackifilesFromFs(productionMetaCtxSchemasPath, (err, metaCtxSchema) => {
                            
                                if (err) {
                                    return callback(err);
                                }
                                var productionWzCtxSchemasPath = path.resolve(__dirname, 'ittf', productionName, 'wzCtxSchemas');
                                if (fsFile.isDirectory(productionWzCtxSchemasPath)) {
                                    createPackifilesFromFs(productionWzCtxSchemasPath, (err, wzCtxSchema) => {
                                    
                                        if (err) {
                                            return callback(err);
                                        }
                                        metaProduction = {
                                            productionName: productionName, 
                                            metaNamespace: "ts", 
                                            folderTemplates: folderTemplates, 
                                            ittfDocumentTemplates: ittfDocumentTemplates, 
                                            metaCtxSchema: metaCtxSchema, 
                                            wzCtxSchema: metaCtxSchema
                                         };
                                        this.metaProductions[productionName] = metaProduction;
                                        return callback(null, metaProduction);
                                    }
                                    )
                                }
                                else {
                                    return callback(null, "Folder " + productionWzCtxSchemasPath + " not found");
                                }
                            }
                            )
                        }
                        else {
                            return callback(null, "Folder " + productionMetaCtxSchemasPath + " not found");
                        }
                    }
                    )
                }
                else {
                    return callback(null, "Folder " + productionIttfDocumentTemplatesPath + " not found");
                }
            }
            )
        }
        else {
            return callback(null, "Folder " + productionFolderTemplatesPath + " not found");
        }
    }
    /**
         Retrieve all WizziMetaProductions
         Simple starter meta generation
    */
    getMetaProductionStarter(options, callback) {
        
        var productions = [
            "tsCommons", 
            "tsEsmWrapper", 
            "tsNode", 
            "tsNodeFeatureGithub", 
            "tsUtils"
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
            }
            var i, i_items=metaProductions, i_len=metaProductions.length, mp;
            for (i=0; i<i_len; i++) {
                mp = metaProductions[i];
                for (var k in mp.ittfDocumentTemplates) {
                    var newk = 'ittfDocumentTemplates/' + mp.productionName + '/' + k;
                    result[newk] = mp.ittfDocumentTemplates[k];
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
