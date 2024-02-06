/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.web\.wizzi-override\root\index.js.ittf
    utc time: Tue, 06 Feb 2024 10:14:34 GMT
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
md.name = 'wizzi.meta.web.index';
md.version = '0.0.2';

var pluginCategories = [
    {
        name: 'webdev', 
        productions: [
            
        ]
     }
];
var pluginMetaProductions = [
    {
        name: 'webAppCrud', 
        title: 'webAppCrud wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webCss', 
        title: 'webCss wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webHtml', 
        title: 'webHtml wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webIttfSite', 
        title: 'webIttfSite wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webIttfStudioMeta', 
        title: 'webIttfStudioMeta wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webJs', 
        title: 'webJs wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webJsWz', 
        title: 'webJsWz wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webSiteDemo', 
        title: 'webSiteDemo wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webSiteWebapi', 
        title: 'webSiteWebapi wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webStaticSite', 
        title: 'webStaticSite wizzi meta production', 
        isPackageMain: true, 
        categories: [
            
        ]
     }, 
    {
        name: 'webSvg', 
        title: 'webSvg wizzi meta production', 
        categories: [
            
        ]
     }, 
    {
        name: 'webWizziDocs', 
        title: 'webWizziDocs wizzi meta production', 
        categories: [
            
        ]
     }
];

class FactoryMeta {
    constructor(provides) {
        this.name = "wizzi.meta.web";
        this.version = "0.0.2";
        this.provides = provides;
        this.metaCategories = {};
        this.metaProductions = {};
        this.metaCtxs = {};
    }
    
    initialize(options, callback) {
        // TODO
        return callback(null);
    }
    
    getName() {
        return 'wizzi.meta.web';
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
                metaProduction.metaNamespace = "web";
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
            "webAppCrud", 
            "webCss", 
            "webHtml", 
            "webIttfSite", 
            "webIttfStudioMeta", 
            "webJs", 
            "webJsWz", 
            "webSiteDemo", 
            "webSiteWebapi", 
            "webStaticSite", 
            "webSvg", 
            "webWizziDocs"
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
                { metaCtxs
                 string productionName
                 { metaCtxSchema
                 { wzCtxSchema
    */
    getMetaCtx(productionName, callback) {
        
        var metaCtx = this.metaCtxs[productionName] || null;
        
        if (metaCtx != null) {
            return callback(null, metaCtx);
        }
        
        metaCtx = {};
        return this.getMetaCtxSchema(productionName, metaCtx, (err, notUsed) => {
            
                if (err) {
                    return callback(err);
                }
                metaCtx.productionName = productionName;
                this.metaCtxs[productionName] = metaCtx;
                return callback(null, metaCtx);
            }
            );
    }
    /**
         If the ittf/<productionName>/metaCtxSchema folder exists
         Enrich the metaProduction object with the metaCtxSchema property
         that contains a packiFile object with the content of the ittf/<productionName>/metaCtxSchema folder.
         Returns a chained call to the getWzCtxSchema method.
    */
    getMetaCtxSchema(productionName, metaProduction, callback) {
        const fsFile = vfile();
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'metaCtxSchemas');
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
        var folderPath = path.resolve(__dirname, 'ittf', productionName, 'wzCtxSchemas');
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
    getMetaCtxStarter(options, callback) {
        
        async.map(pluginMetaProductions, (prod, callback) => 
        
            this.getMetaCtx(prod.name, (err, metaCtx) => {
            
                if (err) {
                    return callback(err);
                }
                return callback(null, metaCtx);
            }
            )
        , (err, metaCtxs) => {
        
            const result = {};
            var i, i_items=metaCtxs, i_len=metaCtxs.length, mp;
            for (i=0; i<i_len; i++) {
                mp = metaCtxs[i];
                for (var k in mp.metaCtxSchema) {
                    var newk = 'metaCtxSchema/' + mp.productionName + '/' + k;
                    mp.metaCtxSchema[k].contents = wizziUtils.verify.replaceAll(mp.metaCtxSchema[k].contents, "{\r\n    [ parameters\r\n", "{\r\n    metaProduction \"" + mp.productionName + "\"\r\n    [ parameters\r\n")
                    ;
                    result[newk] = mp.metaCtxSchema[k];
                }
                for (var k in mp.wzCtxSchema) {
                    var newk = 'wzCtxSchema/' + mp.productionName + '/' + k;
                    mp.wzCtxSchema[k].contents = wizziUtils.verify.replaceAll(mp.wzCtxSchema[k].contents, "{\r\n    [ parameters\r\n", "{\r\n    metaProduction \"" + mp.productionName + "\"\r\n    [ parameters\r\n")
                    ;
                    result[newk] = mp.wzCtxSchema[k];
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
