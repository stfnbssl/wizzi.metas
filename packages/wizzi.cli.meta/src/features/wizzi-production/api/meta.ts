/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\api\meta.ts.ittf
*/
import NodeCache from 'node-cache';
import {ValidateResult, CRUDResult} from '../../types';
import {packiTypes} from '../../packi';
import {packiConfigPath} from '../../config/env';
import {wizziProds, wizziMaps} from '../../wizzi';
import {GetMetaProductionModel} from '../mongo/meta';
import {IMetaProductionModel, PackiProductionObject} from '../types';
import {productionApi} from '../index';
import {mergePackiFiles} from '../utils';

const myname = 'features.production.api.MetaProduction';

const metaProductionCache = new NodeCache({
    stdTTL: 120, 
    checkperiod: 60
 });
export async function validateMetaProduction(owner: string, name: string):  Promise<ValidateResult> {

    const MetaProduction = GetMetaProductionModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            MetaProduction.find(query, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'meta production already exists'
                         });
                }
                resolve({
                    isValid: true
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getMetaProductionList'
        // 'options'
        // options
*/
async function getMetaProductionList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = MetaProduction.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getMetaProductionList', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                const resultItem = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    const item_obj = {
                        _id: item._id, 
                        id: item.id, 
                        owner: item.owner, 
                        name: item.name, 
                        description: item.description, 
                        packiFiles: item.packiFiles
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getMetaProductionList', 
                    ok: true, 
                    item: resultItem
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getMetaProduction'
        // owner
        // name
*/
async function getMetaProduction(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            MetaProduction.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'get', 
                    ok: false, 
                    message: 'meta production not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getMetaProductionById'
        // id
*/
async function getMetaProductionById(id: string):  Promise<CRUDResult> {

    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            MetaProduction.find({
                _id: id
             }, (err: any, result: IMetaProductionModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'getMetaProduction', 
                    ok: false, 
                    message: 'meta production not found'
                 })
            }
            )
        }
        );
}

export async function getMetaProductionObject(owner: string, name: string, loadPackiConfig?: boolean):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            getMetaProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const mp: IMetaProductionModel = result.item;
                return resolve(_createMetaProductionObject(mp, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.metaProduction.getMetaProductionObject.getMetaProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getMetaProductionObjectById(id: string, loadPackiConfig?: boolean):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            getMetaProductionById(id).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const mp: IMetaProductionModel = result.item;
                return resolve(_createMetaProductionObject(mp, loadPackiConfig));
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.metaProduction.getMetaProductionObjectById.getMetaProductionById.error', err);
                return reject(err);
            }
            )
        
        );
}
async function _createMetaProductionObject(mp: IMetaProductionModel, loadPackiConfig?: boolean):  Promise<any> {

    
    return new Promise(
        // loog 'myname', '_createMetaProductionObject.mp', Object.keys(mp)
        
        // loog 'myname', '_createMetaProductionObject.mp_packiFiles_object', Object.keys(mp_packiFiles_object)
        (resolve, reject) => {
        
            const mp_packiFiles_object: packiTypes.PackiFiles = JSON.parse(mp.packiFiles);
            const obj = {
                ...mp._doc, 
                packiFiles: mp_packiFiles_object, 
                _id: mp._id.toString(), 
                packiProduction: "MetaProduction", 
                packiConfig: mp_packiFiles_object[packiConfigPath], 
                packiConfigObj: null
             };
            
            if (loadPackiConfig) {
                if (!obj.packiConfig) {
                    return reject({
                            message: 'Missing file ' + packiConfigPath + ' in MetaProduction'
                         });
                }
                wizziProds.generateArtifact(packiConfigPath, {
                    [packiConfigPath]: {
                        type: obj.packiConfig.type, 
                        contents: obj.packiConfig.contents
                     }
                 }, {}).then(
                // loog myname, '_createMetaProductionObject', 'obj.packiConfigObj', JSON.stringify(obj.packiConfigObj)
                (generationResult: any) => {
                
                    obj.packiConfigObj = JSON.parse(generationResult.artifactContent);
                    return resolve(obj);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.production.api.metaProduction.getMetaProductionObject._createMetaProductionObject.error', err);
                    return reject(err);
                }
                )
            }
            // loog 'myname', '_createMetaProductionObject.resolve', Object.keys(obj)
            else {
                return resolve(obj);
            }
        }
        );
}

export /**
    // console.log
        // myname
        // 'createMetaProduction'
        // owner
        // name
        // description
        // packiFiles
*/
async function createMetaProduction(owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            MetaProduction.find(query, 
            // loog myname, 'getMetaProduction', 'MetaProduction.find', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getMetaProduction', 'MetaProduction.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'meta production already exists'
                         });
                }
                const newMetaProduction = new MetaProduction({
                    owner: owner, 
                    name: name, 
                    description: description, 
                    packiFiles: packiFiles, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newMetaProduction.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createMetaProduction', 'newMetaProduction.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createMetaProduction', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'meta production created'
                         });
                })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'updateMetaProduction'
        // owner
        // name
        // description
        // packiFiles
*/
async function updateMetaProduction(id?: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
            const update: any = {};
            if (typeof owner !== 'undefined') {
                update['owner'] = owner;
            }
            if (typeof name !== 'undefined') {
                update['name'] = name;
            }
            if (typeof description !== 'undefined') {
                update['description'] = description;
            }
            if (typeof packiFiles !== 'undefined') {
                update['packiFiles'] = packiFiles;
            }
            update['updated_at'] = new Date();
            
            MetaProduction.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updateMetaProduction', 'MetaProduction.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updateMetaProduction', 'MetaProduction.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updateMetaProduction', 
                            ok: false, 
                            message: 'meta production document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updateMetaProduction', 
                        ok: true, 
                        message: 'meta production updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deleteMetaProduction'
        // owner
        // name
*/
async function deleteMetaProduction(id: string, owner?: string, name?: string, description?: string, packiFiles?: string):  Promise<CRUDResult> {

    
    
    const MetaProduction = GetMetaProductionModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
            
            MetaProduction.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deleteMetaProduction', 'MetaProduction.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deleteMetaProduction', 
                    ok: true, 
                    message: 'meta production'
                 })
            }
            )
        }
        );
}

export async function mergeMetaProductionFiles(owner: string, name: string, tobeMergedPackiFiles: packiTypes.PackiFiles, options?: any):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            getMetaProductionObject(owner, name, false).then((itemObject: PackiProductionObject) => {
            
                const newPackiFiles = mergePackiFiles(itemObject.packiFiles, tobeMergedPackiFiles, options);
                updateMetaProduction(itemObject._id, itemObject.owner, itemObject.name, itemObject.description, JSON.stringify(newPackiFiles)).then(result => 
                
                    resolve(result)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.production.api.metaProduction.mergeMetaProductionFiles.updateMetaProduction.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.production.api.metaProduction.mergeMetaProductionFiles.getMetaProductionObject.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getMetaProductionObject_stop(owner: string, name: string) {

    return new Promise((resolve, reject) => 
        
            getMetaProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getMetaProductionObject.getMetaProduction.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getMetaProductionObjectById_stop(id: string) {

    return new Promise((resolve, reject) => 
        
            getMetaProductionById(id).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                const obj = {
                    ...tf._doc, 
                    packiFiles: tf_packiFiles_object, 
                    _id: tf._id.toString()
                 };
                return resolve(obj);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getMetaProductionObjectById.getMetaProductionById.error', err);
                return reject(err);
            }
            )
        
        );
}

export // loog 'getMetaProduction_withCache.cacheKey', cacheKey
async function getMetaProduction_withCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    return new Promise((resolve, reject) => {
        
            let mpValue = {
                packiFiles: {
                    
                 }
             };
            getMetaProduction(owner, name).then((result) => {
            
                if (!result.ok) {
                    return reject(result);
                }
                const tf: IMetaProductionModel = result.item;
                const tf_packiFiles_object: packiTypes.PackiFiles = JSON.parse(tf.packiFiles);
                mpValue = {
                    packiFiles: tf_packiFiles_object
                 };
                return resolve(mpValue);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getMetaProduction_withCache.getArtifactProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export function invalidateCache(owner: string, name: string) {

    var cacheKey = owner + '|' + name;
    metaProductionCache.del(cacheKey);
}

export // loog myname, 'getTemplatePackiFiles', 'metaId', metaId, 'cliCtx', Object.keys(cliCtx), 'queryString', queryString, 'rootContext', Object.keys(rootContext)
async function getTemplatePackiFiles(metaId: string, cliCtx: any, queryString: string, rootContext: any):  Promise<packiTypes.PackiFiles> {

    function getPackiFiles(mainIttf: string):  packiTypes.PackiFiles {
    
        const ret: packiTypes.PackiFiles = {};
        ret[mainIttf] = {
            type: 'CODE', 
            contents: ''
         };
        return ret;
    }
    return new Promise((resolve, reject) => {
        
            if (!metaId || metaId.length < 1) {
                return resolve(getPackiFiles('index.js.ittf'));
            }
            productionApi.prepareProductionById('meta', metaId, queryString, rootContext).then(
            // loog 'getTemplatePackiFiles.metaProductionSet', 'packiFiles', Object.keys(metaProductionSet.packiFiles), 'context', Object.keys(metaProductionSet.context),
            (metaProductionSet: any) => {
            
                const context = Object.assign({}, metaProductionSet.context, {
                    cliCtx: cliCtx
                 });
                wizziProds.generateFolderArtifacts('template', 'output', metaProductionSet.packiFiles, context).then(
                // loog 'getTemplatePackiFiles.generatedFolderArtifacts', 'packiFiles', Object.keys(packiFiles),
                (packiFiles: packiTypes.PackiFiles) => 
                
                    resolve(packiFiles)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getTemplatePackiFiles.generateFolderArtifacts.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'getTemplatePackiFiles.prepareProduction.error', err);
                return reject(err);
            }
            )
        }
        );
}

export // loog myname, 'generateMetaProduction', 'owner', owner, 'name', name
async function generateMetaProduction(owner: string, name: string, cliCtx: any):  Promise<packiTypes.PackiFiles> {

    return getMetaProduction(owner, name).then(
        // loog myname, 'generateMetaProduction.gotMetaProductionItem', 'CRUDResult.item.id,keys', metaProduction.item.id, Object.keys(metaProduction.item)
        (metaProduction: CRUDResult) => {
        
            return generateMetaProductionById(metaProduction.item.id, cliCtx);
        }
        )
    ;
}

export // loog myname, 'generateMetaProductionById', 'metaId', metaId, 'cliCtx', Object.keys(cliCtx)
async function generateMetaProductionById(metaId: string, cliCtx: any):  Promise<packiTypes.PackiFiles> {

    return new Promise((resolve, reject) => 
        
            productionApi.prepareProductionById('meta', metaId, "", {}).then(
            // loog 'generateMetaProductionById.metaProductionSet', 'packiFiles', Object.keys(metaProductionSet.packiFiles), 'context', Object.keys(metaProductionSet.context),
            (metaProductionSet: any) => {
            
                const metaContext = Object.assign({}, metaProductionSet.context, {
                    cliCtx: cliCtx
                 });
                wizziProds.metaGenerate(metaProductionSet.packiFiles, metaContext).then(
                // loog 'generateMetaProductionById.metaGenerate.result', 'packiFiles', Object.keys(packiFiles),
                (packiFiles: packiTypes.PackiFiles) => 
                
                    resolve(packiFiles)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'generateMetaProductionById.metaGenerate.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'generateMetaProductionById.prepareProductionById.error', err);
                return reject(err);
            }
            )
        
        );
}
