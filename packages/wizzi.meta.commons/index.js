/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.commons\.wizzi-override\root\index.js.ittf
    utc time: Tue, 16 Jan 2024 12:22:47 GMT
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
md.name = 'wizzi.meta.commons.index';

/**
     FactoryMeta class
*/
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
        return 'wizzi.meta.commons';
    }
    
    getFilename() {
        return __filename;
    }
    
    getProvides() {
        return this.provides;
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
                metaProduction.metaNamespace = "commons";
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
            "commonsBabel", 
            "commonsBabelrc", 
            "commonsDeploy", 
            "commonsEnv", 
            "commonsEslint", 
            "commonsGit", 
            "commonsPackage", 
            "commonsPostcss", 
            "commonsPrettier", 
            "commonsServerCertificate", 
            "commonsTailwind", 
            "commonsWebpack", 
            "commonsWizzi"
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
            'commonsBabel', 
            'commonsBabelrc', 
            'commonsDeploy', 
            'commonsEnv', 
            'commonsEslint', 
            'commonsGit', 
            'commonsPackage', 
            'commonsPostcss', 
            'commonsPrettier', 
            'commonsServerCertificate', 
            'commonsTailwind', 
            'commonsWebpack', 
            'commonsWizzi'
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
