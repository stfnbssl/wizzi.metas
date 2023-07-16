/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.ts\.wizzi-override\root\index.js.ittf
    utc time: Thu, 15 Jun 2023 13:00:09 GMT
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

//
class FactoryMeta {
    constructor(provides) {
        this.provides = provides;
        this.metaProductions = {};
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
    
    //
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
    //
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
    
}

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
    version: '0.0.1', 
    provides: {
        metaProductions: [
            'tsCommons', 
            'tsEsmWrapper', 
            'tsNode', 
            'tsNodeFeatureGithub', 
            'tsUtils'
        ]
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
